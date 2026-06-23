// 按钮点击弹窗简单交互
const authBtn = document.querySelector('.auth-btn');
const mainBtn = document.querySelector('.main-btn');
const cardBtns = document.querySelectorAll('.card-btn');

// 实名认证弹窗提示
authBtn.addEventListener('click',()=>{
    alert("请输入学号、学院完成校园实名认证，仅本校学生可使用平台全部功能");
})
mainBtn.addEventListener('click',()=>{
    alert("跳转实名认证页面");
})
// 商品详情弹窗
cardBtns.forEach(item=>{
    item.addEventListener('click',()=>{
        alert("查看商品详情，可私信卖家、预约线下自提");
    })
})