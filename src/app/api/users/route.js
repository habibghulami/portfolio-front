import user from "../../data/user.json";

export async function GET() {
	return Response.json(user);
}
