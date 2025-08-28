
## LIVE LINK : https://alaminislam3203.github.io/B12-A5-Emergency-Hotline/
---


# সকল প্রশ্নের উত্তর নিচে দেওয়া হলো :

## ১.getElementById, getElementsByClassName, এবং querySelector / querySelectorAll এর মধ্যে পার্থক্য কী?

- **getElementById(id)**  
  - নির্দিষ্ট `id` এর element খুঁজে আনা যায় ।  
  - শুধু একটিমাত্র element return করে ।  

- **getElementsByClassName(className)**  
  - নির্দিষ্ট `class` নাম দিয়ে একাধিক element খুঁজে আনা যায় ।  
  - Loop ব্যবহার করে প্রতিটি element এর কাজ করতে হয়। 
  - সব element কে `HTMLCollection` আকারে return করে।   

- **querySelector(cssSelector)**  
- শুধু প্রথম পাওয়া element return করে।  
  - CSS Selector ব্যবহার করে element খুঁজে আনা যায় ।  
  

- **querySelectorAll(cssSelector)**  
  - CSS Selector ব্যবহার করে সব element খুঁজে আনা যায় ।  
  - সব element কে `NodeList` আকারে return করে।  
  - `forEach` দিয়ে সহজে iterate করা যায়।  

---

## ২. কিভাবে আপনি DOM-এ একটি নতুন উপাদান তৈরি এবং সন্নিবেশ করবেন?

- নতুন element তৈরি করতে **`document.createElement()`** ব্যবহার করা হয়।  
- তারপর **`appendChild()`**, **`append()`**, **`prepend()`**, বা **`insertBefore()`** দিয়ে DOM-এ যোগ করা যায়।  


---

## ৩. ইভেন্ট বাবলিং কী এবং এটি কীভাবে কাজ করে?

- Event Bubbling হলো DOM event propagation এর একটি অংশ ।  
- যখন কোনো child element-এ event হয় , তখন সেই event প্রথমে child element-এ trigger হয়, তারপর parent element এ যায়, তারপর উপরের দিকে আরও parent গুলোতে propagate করে।  
- event "বুদবুদের মত" নিচ থেকে উপরের দিকে ওঠে।  



## ৪. জাভাস্ক্রিপ্টে ইভেন্ট ডেলিগেশন কী? এটি কেন কার্যকর?

- Event Delegation হলো parent element-এ event listener বসানো, যাতে child element-গুলোর event একসাথে handle করা যায়।  
- Event Bubbling এর কারণে child element-এর event parent এ পৌঁছায়। তাই আমরা parent-এ listener বসিয়ে ভিতরের child গুলোর event control করতে পারি।  

 

**কেন কার্যকর?**
- অনেক child element থাকলেও একটাই listener ব্যবহার করা যায়।  
- Performance ভালো হয়, কোডও clean হয়। 
- Dynamically তৈরি হওয়া child element এর event handle করা যায়। 

---

## ৫. preventDefault() এবং stopPropagation() পদ্ধতির মধ্যে পার্থক্য কী?

- **preventDefault()**  
  - কোনো element এর default behavior বন্ধ করে।  
  - যেমন form submit হওয়া, link এ গিয়ে page reload হওয়া ইত্যাদি থামানো যায়।  


- **stopPropagation()**  
  - Event এর propagation বন্ধ করে দেয়।  
  - অর্থাৎ event Bubbling (child → parent) বা Capturing (parent → child) আর চালু থাকে না।  

---

