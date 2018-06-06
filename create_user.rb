 class Resolvers::CreateUser < GraphQL::Function
argument :firstname, !types.String
argument :lastname, !types.String
argument :username, !types.String
argument :password, !types.String
argument :emailaddress, !types.String
argument :gender, !types.String
argument :country, !types.String
argument :dateofbirth, !types.String
argument :county, !types.String
argument :town, !types.String

type Types::UserType

def call(obj, args, _ctx)
    User.create!(
      firstname: args[:firstname],
      lastname: args[:lastname],
      username: args[:username],
      password: args[:password],
      emailaddress: args[:emailaddress],
      gender: args[:gender],
      country: args[:country],
      dateofbirth: args[:dateofbirth],
      county: args[:county],
      town: args[:town],
    )
  rescue ActiveRecord::RecordInvalid => e
    GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(',')}")
  end
end
