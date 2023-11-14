import prisma from "../../../prisma/prisma"

export async function POST(request: Request) {
    const res = await request.json()
    const { id } = await res

    console.log("ID", id)

    const deleteNote = await prisma.notes.delete({
        where: {
            id: id
        }
    })

    

    return Response.json({ message: "Note deleted successfully" })
}