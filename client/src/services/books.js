import BaseService from "./baseServices";
import SERVICES from "../config/services";

export default class BooksService extends BaseService {
  static BooksRoute = SERVICES.BOOKS;
  static BookRoute = SERVICES.BOOK;

  static async getBooks() {
    try {
      const booksResponse = await this.getRequest(this.BooksRoute);

      if (booksResponse.status === "success") {
      }

      return booksResponse;
    } catch (e) {
      console.error(e);

      return {
        status: "error",
        error: "An error occured while retriving books."
      };
    }
  }

  static async getBook(id) {
    try {
      const response = await this.getRequest(
        this.buildRoute(this.BookRoute, { id })
      );

      return response;
    } catch (e) {
      console.error(e);

      return {
        status: "error",
        error: "An error occured while retriving books."
      };
    }
  }

  static async updateBook(book) {
    try {
      const response = await this.putJSONRequest(
        this.buildRoute(this.BookRoute, { id: book.id }),
        book
      );

      return response;
    } catch (e) {
      console.error(e);

      return {
        status: "error",
        error: "An error occured while retriving books."
      };
    }
  }

  static async createBook(book) {
    try {
      const response = await this.postJSONRequest(
        this.buildRoute(this.BooksRoute),
        book
      );

      return response;
    } catch (e) {
      console.error(e);

      return {
        status: "error",
        error: "An error occured while retriving books."
      };
    }
  }

  static async deleteBook(id) {
    try {
      const response = await this.deleteJSONRequest(
        this.buildRoute(this.BookRoute, { id })
      );

      return response;
    } catch (e) {
      console.error(e);

      return {
        status: "error",
        error: "An error occured while retriving books."
      };
    }
  }
}
