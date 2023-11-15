import BookInfo from "@/models/bookInfo";
import { connectToDB } from "@/utils/database";

//delete book
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await BookInfo.findByIdAndDelete(params.id);
    return new Response("deleted this book successfully", { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

//update book
export const PATCH = async (request, { params }) => {
  const { bookName, bookTopic } = await request.json();
  try {
    await connectToDB();
    const existingBook = await BookInfo.findById(params.id);
    if (!existingBook) {
      return new Response("book not found", { status: 404 });
    }
    existingBook.name = bookName;
    existingBook.topic = bookTopic;
    await existingBook.save();
    return new Response("updated this book successfully", { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
