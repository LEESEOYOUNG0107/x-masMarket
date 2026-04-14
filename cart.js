function addToCart(button) {
    // 클릭한 버튼의 부모 요소(.product-box)를 찾아서 상품 정보 가져오기
    const productBox = button.closest('.product-box');
    const imgSrc = productBox.querySelector('.product_img').src;
    const seller = productBox.querySelector('.product_seller').innerText;
    const name = productBox.querySelector('.product_name').innerText;
    const price = productBox.querySelector('.product_price').innerText;

    // 상품 객체 생성
    const product = {
        img: imgSrc,
        seller: seller,
        name: name,
        price: price
    };

    // 기존 장바구니 데이터 불러오기 (없으면 빈 배열)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 새 상품 추가
    cart.push(product);

    // localStorage에 다시 저장
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(name + '이(가) 장바구니에 추가되었습니다!');
}