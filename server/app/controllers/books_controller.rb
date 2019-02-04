class BooksController < ApplicationController
  def index
    @books = Book.all
  end
  def create
    book = Book.create!(book_params)
    render :json => book
  end
  def update
    book = Book.find(params[:id])
    if book.update_attributes(book_params)
      render :json => book
    end
  end
  def destroy
    book = Book.find(params[:id])
    book.delete
    render :json => {"success": "book deleted"}
  end

  def book_params
    params.permit(
      :title,
      :ISBN,
      :notes
    )
  end
end
