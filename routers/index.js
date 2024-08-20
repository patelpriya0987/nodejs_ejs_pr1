const express = require('express');
const router=express.Router();


router.get('/' , (req,res)=>{
    res.render("index.ejs");
})
router.get('/about' , (req,res)=>{
    res.render("page/about");
})
router.get('/404' , (req,res)=>{
    console.log(__dirname);
    res.render("page/404");
})
router.get('/cart' , (req,res)=>{
    console.log(__dirname);
    res.render("page/cart");
})
router.get('/CheckOut' , (req,res)=>{
    console.log(__dirname);
    res.render("page/CheckOut");
})
router.get('/chefs' , (req,res)=>{
    console.log(__dirname);
    res.render("page/chefs");
})
router.get('/coming_soon' , (req,res)=>{
    console.log(__dirname);
    res.render("page/coming_soon");
})
router.get('/contact' , (req,res)=>{
    console.log(__dirname);
    res.render("page/contact");
})
router.get('/empty_cart' , (req,res)=>{
    console.log(__dirname);
    res.render("page/empty_cart");
})
router.get('/gallery' , (req,res)=>{
    console.log(__dirname);
    res.render("page/gallery");
})
router.get('/home_3' , (req,res)=>{
    console.log(__dirname);
    res.render("page/home_3");
})
router.get('/menu_tab' , (req,res)=>{
    console.log(__dirname);
    res.render("page/menu_tab");
})
router.get('/menu' , (req,res)=>{
    console.log(__dirname);
    res.render("page/menu");
})
router.get('/news' , (req,res)=>{
    console.log(__dirname);
    res.render("page/news");
})
router.get('/news_details' , (req,res)=>{
    console.log(__dirname);
    res.render("page/news_details");
})
router.get('/Reservations' , (req,res)=>{
    console.log(__dirname);
    res.render("page/Reservations");
})
router.get('/shop_product' , (req,res)=>{
    console.log(__dirname);
    res.render("page/shop_product");
})
router.get('/shop' , (req,res)=>{
    console.log(__dirname);
    res.render("page/shop");
})
router.get('/specia_menu' , (req,res)=>{
    console.log(__dirname);
    res.render("page/specia_menu");
})
router.get('/testimonials' , (req,res)=>{
    console.log(__dirname);
    res.render("page/testimonials");
})
router.get('/testimonials_2' , (req,res)=>{
    console.log(__dirname);
    res.render("page/testimonials_2");
})
module.exports = router;