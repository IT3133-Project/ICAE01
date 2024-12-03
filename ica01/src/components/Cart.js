export default function Cart({Item}) {
    let grandtotal=0;
    for(let i=0; i< Item.length;i++){
        grandtotal += Item[i].totalPrice;
    }

    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                {
                    Item.map((itm)=>(
                        <tr>
                            <td>{itm.name}</td>
                            <td>{itm.quantity}</td>
                            <td>{itm.totalPrice}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>{grandtotal}</td>
                </tr>
            </table>
        </div>
    );
}