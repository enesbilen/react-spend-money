function Product({ product, total, money, basket, setBasket }) {

  // üründen kaç tane varsa ekleyip gösterelim ekranda.
  const basketItem = basket.find(item => item.id === product.id)

  // ürünü spete ekleme işlemi
  const addBasket = () => {
    const checkBasket = basket.find(item => item.id === product.id)
    //ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
    } else {
      setBasket([...basket, {
        id: product.id,
        amount: 1
      }])
    }
  }

  // ürünü sepetten çıkarma işlemi

  const removeBasket = () => {
    const currentBasket = basket.find(item => item.id === product.id)
    const basketWithoutCurrent = basket.filter(item => item.id !== product.id);
    currentBasket.amount -= 1
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent])
    } else {
      setBasket([...basketWithoutCurrent, currentBasket])
    }
  }

  return (
    <div>
      <div className="product">
        <h6>{product.title}</h6>
        <div className="price">{product.price}$</div>
        <div className="actions">
          <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
          <span className="amount">{basketItem && basketItem.amount || 0}</span>
          <button disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
        </div>
        <style jsx>{`
            .product {
                padding : 10px;
                background: #fff;
                border: 1px solid #ddd;
                margin-bottom:20px;
            }
            `}</style>
      </div>
    </div>
  );
}


export default Product