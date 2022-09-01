function updateOrder(req , res)
{
    try
    {

        res.json(
            {
                message: "Updating an Order with id=> "+req.params.id
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}

function getAllOrders(req , res)
{
    try
    {

        res.json(
            {
                message: "Getting all Orders"
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}

function deleteOrder(req , res)
{
    try
    {

        res.json(
            {
                message: "Deleting an Order with id=> "+req.params.id
            }
        )

    } catch (e) { console.log("OOPS!!Error occurred",e) }
}




module.exports =
    {
        updateOrder,
        getAllOrders,
        deleteOrder,
    }