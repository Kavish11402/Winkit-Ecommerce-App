function createProduct(req , res)
{
    try
    {

        res.json(
            {
                message: "Creating a Product"
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}

function updateProduct(req , res)
{
    try
    {

        res.json(
            {
                message: "Updating a Product with id=> "+req.params.id
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}

function getAllProducts(req , res)
{
    try
    {

        res.json(
            {
                message: "Getting all Products"
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}

function deleteProduct(req , res)
{
    try
    {

        res.json(
            {
                message: "Deleting a Product with id=> "+req.params.id
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}




module.exports =
    {
        createProduct,
        updateProduct,
        getAllProducts,
        deleteProduct
    } 