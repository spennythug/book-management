json.books @books do |book|
  json.id book.id
  json.title book.title
  json.ISBN book.ISBN
  json.notes book.notes
end
