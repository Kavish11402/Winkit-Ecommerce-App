function getAllUsers(req , res)
{
    try
    {

        res.json(
            {
                message: "Getting all Users"
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}





module.exports =
    {
        getAllUsers
    }