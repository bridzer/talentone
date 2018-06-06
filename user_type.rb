Types::UserType = GraphQL::ObjectType.define do
  name "user"
  field :id, !types.ID
  field :firstname, !types.String
  field :lastname, !types.String
  field :username, !types.String
  field :password, !types.String
  field :emailaddress,!types.String
  field :dateofbirth, !types.String
  field :gender, !types.String
  field :country, !types.String
  field :county, !types.String
  field :town, !types.String
  field :talent, !types.String
end
