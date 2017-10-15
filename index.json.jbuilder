json.array!(@users) do |user|
  json.extract! user, :id, :firstname, :lastname, :username, :email, :password, :dateofbirth, :country, :zipcode, :city
  json.url user_url(user, format: :json)
end
