import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { slugify } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, organizationName } = await req.json();

    if (!name || !email || !password || !organizationName) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create organization
    const slug = slugify(organizationName) + "-" + Date.now().toString(36);
    const organization = await db.organization.create({
      data: {
        name: organizationName,
        slug,
      },
    });

    // Create user
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "OWNER",
        organizationId: organization.id,
      },
    });

    return NextResponse.json(
      {
        success: true,
        user: { id: user.id, email: user.email, name: user.name },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
