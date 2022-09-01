function createCategory(req , res)
{
    try
    {

        res.json(
            {
                message: "Creating a category"
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}

function updateCategory(req , res)
{
    try
    {

        res.json(
            {
                message: "Updating a category with id=> "+req.params.id
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}

function getAllCategories(req , res)
{
    try
    {

        res.json(
            {
                message: "Getting all categories"
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}

function deleteCategory(req , res)
{
    try
    {

        res.json(
            {
                message: "Deleting a category with id=> "+req.params.id
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}




module.exports =
    {
        createCategory,
        updateCategory,
        getAllCategories,
        deleteCategory
    }