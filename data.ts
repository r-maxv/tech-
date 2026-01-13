
import { AppConfig } from './types';

export const CONFIG: AppConfig = {
  siteName: "US Great Offers",
  siteTagline: "Promoted by The US Great Offer",
  logoUrl: "https://i.ibb.co.com/SgG968j/unnamed-Copy.jpg",
  bgImageUrl: "https://static.vecteezy.com/system/resources/thumbnails/068/950/768/small_2x/a-cityscape-with-lights-and-buildings-at-night-photo.jpg",
  noticeText: "🔥 All offers verified by The US Great Offer",
  
  whatsappNumber: "8801722933864", 

  featuredRewardText: "🚀 Featured Reward",
  featuredRewardUrl: "#", 
  featuredOfferLabel: "Featured Offer",
  bannerButtonText: "Order Now", // Changed from "Claim This Reward"

  heroTitle: "Claim Your",
  heroHighlight: "Exclusive Rewards",
  heroSubtitle: "Join thousands of users winning daily. Simple tasks, verified rewards, and instant access to the best deals online.",
  heroButtonText: "🔥 Explore All Offers",

  theme: {
    primary: "#ff3629", 
    secondary: "#dd2476", 
    accent: "#4ae603", 
    backgroundOverlay: "rgba(0,0,0,0.5)"
  },

  socials: [
    { name: 'facebook', url: '#', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg' },
    { name: 'twitter', url: '#', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg' },
    { name: 'instagram', url: '#', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg' },
    { name: 'youtube', url: '#', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg' },
  ],

  categories: [
    { 
      id: 'cash', 
      title: '💵 Cash Rewards',
      navTitle: 'Cash Rewards',
      offers: [
        {id:'c1', title:'$1000 Cash Deposit', img:'https://network.affmine.com/preview/27280.png', short:'Claim a $1000 direct cash deposit.', desc:'Complete simple tasks and trials to qualify for a massive cash reward.', bullets:['Sign up','Verify Email','Complete Tasks'], url:'https://www.af9m8trk.com/VV211FJE/4K1123XK/', url2:'#'},
        {id:'c2', title:'$750 Zelle Reward', img:'https://network.affmine.com/preview/27279.png', short:'Get $750 via Zelle instant transfer.', desc:'Fast and secure Zelle rewards for US citizens.', bullets:['Register','Quick Survey'], url:'#', url2:'#'},
        {id:'c3', title:'Venmo $500 Reward', img:'https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=400', short:'Claim $500 Venmo Balance.', desc:'Verified Venmo cash offer.', bullets:['Sign Up','Verify'], url:'#', url2:'#'},
        {id:'c4', title:'CashApp $1000 Bonus', img:'https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=400', short:'Instant CashApp Deposit.', desc:'Complete tasks for CashApp rewards.', bullets:['Account Link','Task Completion'], url:'#', url2:'#'},
        {id:'c5', title:'PayPal $250 Credit', img:'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=400', short:'Free PayPal money.', desc:'Get $250 credited to your PayPal.', bullets:['Email Verify','Small Survey'], url:'#', url2:'#'},
        {id:'c6', title:'Visa $500 Gift Card', img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400', short:'Spend anywhere with Visa.', desc:'Claim a $500 pre-paid Visa card.', bullets:['Claim Now'], url:'#', url2:'#'},
        {id:'c7', title:'Mastercard $600 Reward', img:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400', short:'$600 Mastercard Credit.', desc:'Use it for your favorite online shopping.', bullets:['Easy Sign Up'], url:'#', url2:'#'},
        {id:'c8', title:'Bank Transfer $1200', img:'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400', short:'Direct Bank Deposit.', desc:'Claim a massive $1200 bonus.', bullets:['Fast Payout'], url:'#', url2:'#'},
        {id:'c9', title:'Amex $400 Voucher', img:'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=400', short:'American Express Reward.', desc:'Verified Amex gift card.', bullets:['Verified'], url:'#', url2:'#'},
        {id:'c10', title:'Crypto $100 Bitcoin', img:'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=400', short:'Free Bitcoin Bonus.', desc:'Get $100 worth of BTC.', bullets:['No Deposit'], url:'#', url2:'#'},
        {id:'c11', title:'Coinbase $50 Reward', img:'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=400', short:'Start Trading Now.', desc:'$50 credit for Coinbase users.', bullets:['Survey Only'], url:'#', url2:'#'},
        {id:'c12', title:'Skrill $200 Bonus', img:'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=400', short:'Digital Wallet Credit.', desc:'$200 bonus in your Skrill account.', bullets:['Claim Now'], url:'#', url2:'#'},
      ]
    },
    { 
      id: 'work', 
      title: '🏠 Work From Home',
      navTitle: 'Work From Home',
      offers: [
        {id:'w1', title:'Remote Data Entry', img:'https://markuphero.com/blog/content/images/2022/05/remote_work_amazon.jpeg', short:'Earn $25/hr from home.', desc:'High demand data entry positions available now.', bullets:['Flexible','No Exp Required'], url:'#', url2:'#'},
        {id:'w2', title:'Amazon Flex Delivery', img:'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=400', short:'Be your own boss.', desc:'Join Amazon delivery team.', bullets:['License Req','Flexible Time'], url:'#', url2:'#'},
        {id:'w3', title:'Customer Chat Support', img:'https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=400', short:'Chat and Earn.', desc:'Help customers online.', bullets:['Training Provided'], url:'#', url2:'#'},
        {id:'w4', title:'Virtual Assistant', img:'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400', short:'Manage tasks remotely.', desc:'Help business owners.', bullets:['Organized','Part-time'], url:'#', url2:'#'},
        {id:'w5', title:'Online Survey Taker', img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400', short:'Share your opinion.', desc:'Get paid for surveys.', bullets:['Free Join'], url:'#', url2:'#'},
        {id:'w6', title:'Graphic Designer', img:'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400', short:'Design and Earn.', desc:'Creative remote jobs.', bullets:['Portfolio Req'], url:'#', url2:'#'},
        {id:'w7', title:'App Tester Role', img:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400', short:'Test Apps and Earn.', desc:'Check for bugs and get paid.', bullets:['Android/iOS'], url:'#', url2:'#'},
        {id:'w8', title:'Transcriptionist Job', img:'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400', short:'Audio to Text Job.', desc:'Convert audio files into text.', bullets:['Fast Typing'], url:'#', url2:'#'},
        {id:'w9', title:'English Tutor Online', img:'https://images.unsplash.com/photo-1434039311811-47769823a3c3?q=80&w=400', short:'Teach English.', desc:'Help students learn English.', bullets:['Degree Preferred'], url:'#', url2:'#'},
        {id:'w10', title:'Social Media Manager', img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400', short:'Manage Social Accounts.', desc:'Grow brands on social media.', bullets:['Creative'], url:'#', url2:'#'},
        {id:'w11', title:'Content Writer', img:'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400', short:'Write Articles.', desc:'Earn per word written.', bullets:['Samples Req'], url:'#', url2:'#'},
        {id:'w12', title:'Proofreader Job', img:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400', short:'Fix Grammar.', desc:'Edit documents for errors.', bullets:['Detail Oriented'], url:'#', url2:'#'},
      ]
    },
    { 
      id: 'shopping', 
      title: '🛍️ Shopping Deals',
      navTitle: 'Shopping',
      offers: [
        {id:'s1', title:'Amazon $500 Gift Card', img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400', short:'Shop anything on Amazon.', desc:'Verified $500 shopping spree on us.', bullets:['Sign Up','Complete Profile'], url:'#', url2:'#'},
        {id:'s2', title:'Costco $750 Card', img:'https://network.affmine.com/preview/27283.png', short:'Costco shopping reward.', desc:'Exclusive for US members.', bullets:['Survey','Claim'], url:'#', url2:'#'},
        {id:'s3', title:'Walmart $1000 Reward', img:'https://images.unsplash.com/photo-1534452286304-a8151e2391c5?q=80&w=400', short:'Huge Walmart Savings.', desc:'Claim $1000 for Walmart.', bullets:['Verified'], url:'#', url2:'#'},
        {id:'s4', title:'Target $500 Coupon', img:'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400', short:'Shop at Target.', desc:'Claim your $500 coupon.', bullets:['Register'], url:'#', url2:'#'},
        {id:'s5', title:'Apple Store Credit', img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=400', short:'Buy Apple Products.', desc:'$300 credit for Apple Store.', bullets:['Tasks'], url:'#', url2:'#'},
        {id:'s6', title:'BestBuy $400 Reward', img:'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=400', short:'Tech shopping.', desc:'$400 BestBuy gift card.', bullets:['Claim'], url:'#', url2:'#'},
        {id:'s7', title:'Nike $200 Voucher', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400', short:'New Sneakers Reward.', desc:'Get $200 Nike store credit.', bullets:['Claim Now'], url:'#', url2:'#'},
        {id:'s8', title:'Sephora $150 Card', img:'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=400', short:'Beauty Products.', desc:'$150 gift card for Sephora.', bullets:['Quick Task'], url:'#', url2:'#'},
        {id:'s9', title:'Adidas $300 Coupon', img:'https://images.unsplash.com/photo-1518002171953-a080ee81be46?q=80&w=400', short:'Sportswear Reward.', desc:'$300 Adidas voucher.', bullets:['Verified'], url:'#', url2:'#'},
        {id:'s10', title:'H&M $100 Credit', img:'https://images.unsplash.com/photo-1567401893424-7b2156ce9117?q=80&w=400', short:'Fashion Shopping.', desc:'Claim $100 for H&M.', bullets:['Easy Sign Up'], url:'#', url2:'#'},
        {id:'s11', title:'Macy\'s $250 Card', img:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400', short:'Department Store Reward.', desc:'$250 Macy\'s gift card.', bullets:['Register'], url:'#', url2:'#'},
        {id:'s12', title:'Gap $150 Reward', img:'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=400', short:'Clothing Voucher.', desc:'$150 credit for Gap.', bullets:['Verified'], url:'#', url2:'#'},
      ]
    },
    { 
      id: 'gaming', 
      title: '🎮 Gaming & Entertainment',
      navTitle: 'Gaming',
      offers: [
        {id:'g1', title:'Pubg UC Offer', img:'https://news.seagm.com/wp-content/uploads/2025/01/SEAGM-x-PUBG-30-Discount-Coupon_Article_1200x630.jpg', short:'Get free UC for PUBG Mobile.', desc:'Dominate the battleground with free skins and items.', bullets:['ID Required','Verify'], url:'#', url2:'#'},
        {id:'g2', title:'Free Fire Diamonds', img:'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400', short:'Claim FF Diamonds.', desc:'Upgrade your character.', bullets:['Quick Task'], url:'#', url2:'#'},
        {id:'g3', title:'PlayStation Plus 1Yr', img:'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=400', short:'Gaming Subscription.', desc:'Free PS Plus for one year.', bullets:['Register'], url:'#', url2:'#'},
        {id:'g4', title:'Xbox Game Pass', img:'https://images.unsplash.com/photo-1605902711622-cfb43c443ffb?q=80&w=400', short:'Play 100+ Games.', desc:'Claim Xbox Game Pass.', bullets:['Verification'], url:'#', url2:'#'},
        {id:'g5', title:'Roblox Robux Bonus', img:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=400', short:'Free Robux for Roblox.', desc:'Get unlimited Robux.', bullets:['Task Completion'], url:'#', url2:'#'},
        {id:'g6', title:'Steam $100 Wallet', img:'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400', short:'Buy Steam Games.', desc:'$100 Steam wallet code.', bullets:['Survey'], url:'#', url2:'#'},
        {id:'g7', title:'Nintendo eShop Card', img:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400', short:'Switch Games Reward.', desc:'$50 Nintendo eShop credit.', bullets:['Claim Now'], url:'#', url2:'#'},
        {id:'g8', title:'Twitch $25 Bit Bonus', img:'https://images.unsplash.com/photo-1561677843-39dee7a319ca?q=80&w=400', short:'Support Streamers.', desc:'Get free Twitch bits.', bullets:['Register'], url:'#', url2:'#'},
        {id:'g9', title:'Discord Nitro 3 Months', img:'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=400', short:'Nitro Boost Reward.', desc:'Verified 3 months Nitro.', bullets:['New Users'], url:'#', url2:'#'},
        {id:'g10', title:'Fortnite V-Bucks', img:'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=80&w=400', short:'In-Game Currency.', desc:'Claim 2800 V-Bucks.', bullets:['Verification'], url:'#', url2:'#'},
        {id:'g11', title:'Razer Gold $100', img:'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400', short:'Gaming Credit.', desc:'$100 Razer Gold voucher.', bullets:['Tasks'], url:'#', url2:'#'},
        {id:'g12', title:'Valorant Points', img:'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400', short:'Skins and Items.', desc:'Claim Valorant VP.', bullets:['Easy Verify'], url:'#', url2:'#'},
      ]
    },
    { 
      id: 'food', 
      title: '🍔 Food & Dining',
      navTitle: 'Food',
      offers: [
        {id:'f1', title:"McDonald's $100 Reward", img:'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400', short:'Free Big Macs for a month.', desc:'Claim your $100 McDonald\'s gift card now.', bullets:['Register','Verify'], url:'https://www.af9m8trk.com/VV211FJE/UPW123XH/', url2:'#'},
        {id:'f2', title:'Starbucks $50 Card', img:'https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=400', short:'Free Coffee Daily.', desc:'Get a Starbucks gift card.', bullets:['Claim'], url:'#', url2:'#'},
        {id:'f3', title:'UberEats $150 Credit', img:'https://images.unsplash.com/photo-1526367790999-0150786486a9?q=80&w=400', short:'Free Food Delivery.', desc:'Enjoy free meals with UberEats.', bullets:['Sign Up'], url:'#', url2:'#'},
        {id:'f4', title:'DoorDash $200 Reward', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400', short:'Fast Food Rewards.', desc:'Claim your DoorDash credit.', bullets:['Survey'], url:'#', url2:'#'},
        {id:'f5', title:'Pizza Hut Coupon', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400', short:'Free Pizza Party.', desc:'Claim Pizza Hut vouchers.', bullets:['Email Verify'], url:'#', url2:'#'},
        {id:'f6', title:'Burger King $50', img:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=400', short:'Whopper Rewards.', desc:'Claim BK gift cards.', bullets:['Verify'], url:'#', url2:'#'},
        {id:'f7', title:'Subway $75 Voucher', img:'https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=400', short:'Eat Fresh.', desc:'$75 Subway gift card.', bullets:['Claim Now'], url:'#', url2:'#'},
        {id:'f8', title:'Chipotle $100 Card', img:'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=400', short:'Burrito Bonus.', desc:'Get $100 for Chipotle.', bullets:['Survey'], url:'#', url2:'#'},
        {id:'f9', title:'Dunkin\' Donuts $40', img:'https://images.unsplash.com/photo-1527515856481-5ad8d65179b5?q=80&w=400', short:'Coffee and Donuts.', desc:'$40 credit for Dunkin\'.', bullets:['Easy Sign Up'], url:'#', url2:'#'},
        {id:'f10', title:'KFC $60 Gift Card', img:'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=400', short:'Fried Chicken Reward.', desc:'Claim KFC vouchers.', bullets:['Verified'], url:'#', url2:'#'},
        {id:'f11', title:'Papa John\'s $50', img:'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=400', short:'Better Ingredients Pizza.', desc:'$50 Papa John\'s gift card.', bullets:['Register'], url:'#', url2:'#'},
        {id:'f12', title:'Taco Bell $100 Card', img:'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=400', short:'Taco Tuesday Bonus.', desc:'Claim $100 for Taco Bell.', bullets:['Claim Now'], url:'#', url2:'#'},
      ]
    },
    { 
      id: 'electronics', 
      title: '📱 Electronics & Tech',
      navTitle: 'Tech',
      offers: [
        {id:'e1', title:'iPhone 16 Pro Max', img:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=400', short:'Win the latest iPhone.', desc:'Be one of the first to own the iPhone 16 Pro Max.', bullets:['Sign Up','Enter Sweepstakes'], url:'#', url2:'#'},
        {id:'e2', title:'Samsung S24 Ultra', img:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400', short:'Flagship Samsung Phone.', desc:'Claim your S24 Ultra.', bullets:['Register'], url:'#', url2:'#'},
        {id:'e3', title:'MacBook Air M3', img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400', short:'Ultimate Work Laptop.', desc:'Claim your MacBook.', bullets:['Survey'], url:'#', url2:'#'},
        {id:'e4', title:'AirPods Pro Gen 2', img:'https://images.unsplash.com/photo-1588423770574-91021160dfbb?q=80&w=400', short:'Wireless Audio.', desc:'Claim free AirPods.', bullets:['Claim'], url:'#', url2:'#'},
        {id:'e5', title:'iPad Pro 12.9', img:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=400', short:'Creative Tablet.', desc:'Get a free iPad Pro.', bullets:['Tasks'], url:'#', url2:'#'},
        {id:'e6', title:'Sony PS5 Console', img:'https://images.unsplash.com/photo-1606813907291-d86ebb9954ad?q=80&w=400', short:'Next-Gen Gaming.', desc:'Claim your PS5.', bullets:['Verification'], url:'#', url2:'#'},
        {id:'e7', title:'Google Pixel 9 Pro', img:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=400', short:'Pure Android.', desc:'Win the latest Google Pixel.', bullets:['Easy Sign Up'], url:'#', url2:'#'},
        {id:'e8', title:'Microsoft Surface Pro', img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400', short:'Versatile Tablet.', desc:'Get a free Surface Pro.', bullets:['Survey'], url:'#', url2:'#'},
        {id:'e9', title:'Dell XPS 13 Laptop', img:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=400', short:'Premium Ultrabook.', desc:'Claim a Dell XPS laptop.', bullets:['Verified'], url:'#', url2:'#'},
        {id:'e10', title:'Apple Watch Ultra 2', img:'https://images.unsplash.com/photo-1434493907317-a46b53b81846?q=80&w=400', short:'The Rugged Watch.', desc:'Claim free Apple Watch.', bullets:['Register'], url:'#', url2:'#'},
        {id:'e11', title:'GoPro HERO 13', img:'https://images.unsplash.com/photo-1524311588100-2494593881f1?q=80&w=400', short:'Action Camera.', desc:'Claim a free GoPro HERO.', bullets:['Tasks'], url:'#', url2:'#'},
        {id:'e12', title:'Bose QuietComfort', img:'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400', short:'Noise Cancelling.', desc:'Claim Bose Headphones.', bullets:['Easy Verify'], url:'#', url2:'#'},
      ]
    }
  ]
};
