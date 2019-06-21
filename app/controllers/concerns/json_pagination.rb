module JsonPagination
  def json_pagination object
    {
      pagination: {
        per_page: object.per_page,
        current_page: object.current_page,
        next_page: object.next_page,
        previous_page: object.previous_page,
        total_pages: object.total_pages,
        total_objects: object.total_entries
      }
    }
  end
end
