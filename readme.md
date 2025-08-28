

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

1.getElementById:শুধু একটি এলিমেন্ট সিলেক্ট করে, যেটার id দেওয়া আছে।এটি সবচেয়ে দ্রুত কাজ করে।id সবসময় ইউনিক হয়

getElementsByClassName:নির্দিষ্ট ক্লাসনেম থাকা সবগুলো এলিমেন্ট সিলেক্ট করে।একটি HTMLCollection রিটার্ন করে। DOM এ নতুন কিছু যোগ হলে সাথে সাথে আপডেট হয়।

querySelector : একটিমাত্র Element object রিটার্ন করে।যেকোনো CSS selector ব্যবহার করে প্রথম মিলে যাওয়া এলিমেন্ট সিলেক্ট করে।

querySelectorAll : যেকোনো CSS selector দিয়ে সবগুলো মিলে যাওয়া এলিমেন্ট সিলেক্ট করে।একটি NodeList রিটার্ন করে।

---
2.document.createElement() ব্যাবহার করে নতুন Element Create করতে হয়। DOM এর ভেতরে নতুন element insert করতে হলে appendChild(newElm) use করতে হয়

---
3.Event Bubbling হলো জাভাস্ক্রিপ্টের একটি ইভেন্ট প্রোপাগেশন মেকানিজম। যখন কোনো এলিমেন্টে একটি ইভেন্ট ঘটে (যেমন click), তখন সেই ইভেন্ট প্রথমে ঐ এলিমেন্টে ট্রিগার হয়। এরপর ইভেন্টটি ধাপে ধাপে এর parent, তারপর তার parent, এভাবে সর্বোচ্চ root element (document) পর্যন্ত উপরে উঠতে থাকে। একে বলা হয় "বাবলিং"

---
4.Event Delegation হলো জাভাস্ক্রিপ্টের একটি টেকনিক যেখানে আমরা সরাসরি প্রতিটি child element-এ event listener বসাই না। বরং তাদের common parent element-এ একটি event listener বসাই। ইভেন্ট বাবলিং এর কারণে যখন child element-এ ইভেন্ট ঘটে, সেটা parent পর্যন্ত পৌঁছে যায়, আর parent থেকেই আমরা কোন child-এ ইভেন্ট ঘটেছে সেটা চিনে নিয়ে কাজ করে।

এর কার্জকারি দিক -
কম কোড লেখা যায়। প্রতিটি child element-এ আলাদা করে event listener বসাতে হয় না।পারফরম্যান্স ভালো হয়।অনেক child element থাকলেও একটি parent-এ মাত্র একটি listener থাকে।

---
5.preventDefault() element-এর default action বন্ধ করে ,যেমন link redirect, form submit। এটি Default behavior কাস্টমাইজ করতে চাইলে ব্যবহার হয়

stopPropagation() event-এর বাবলিং বন্ধ করে যাতে parent পর্যন্ত না যায়।শুধু নির্দিষ্ট element-এ ইভেন্ট সীমাবদ্ধ রাখতে চাইলে ব্যবহার হয়