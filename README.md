
## 🌐Live Link : https://alaminislam3203.github.io/B12-A5-Emergency-Hotline/
---


# All the answers to the questions are given below:

## 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById(id)**  
  - Can find the element of a specific id. 
  - Returns only one element.

- **getElementsByClassName(className)**  
  - Can find multiple elements using a specific class name.
  - Need to use a loop to work with each element.
  - Returns all elements as an HTMLCollection.

- **querySelector(cssSelector)**  
- Returns only the first matched element.
  - Can find elements using CSS Selector.  
  

- **querySelectorAll(cssSelector)**  
  - Can find all elements using CSS Selector.
  - Returns all elements as a NodeList.
  - Can be easily iterated using forEach.

---

## 2. How do you create and insert a new element in the DOM?

- Use document.createElement() to create a new element.
- Then use appendChild(), append(), prepend(), or insertBefore() to add it to the DOM.  


---

## 3. What is event bubbling and how does it work?

- Event bubbling is a part of DOM event propagation.
- When an event occurs on a child element, it first triggers on the child, then moves to the parent, and then propagates upwards through more parent elements. 
- The event rises upward "like a bubble" from bottom to top. 



## 4. What is event delegation in JavaScript? Why is it useful?

- Event delegation is placing an event listener on a parent element so that the events of child elements can be handled together.
- Because of event bubbling, the child element's event reaches the parent. That’s why we can place a listener on the parent and control the events of the child elements.

 

**Why is it useful?**
- Even with many child elements, only one listener is needed. 
- Performance improves, and the code becomes cleaner.
- Can handle events of dynamically created child elements.

---

## 5.What is the difference between preventDefault() and stopPropagation()?

- **preventDefault()**  
  - Stops the default behavior of an element. 
  - For example, prevents form submission or page reload when clicking a link.


- **stopPropagation()**  
  - Stops the propagation of the event.
  - Meaning event bubbling (child → parent) or capturing (parent → child) no longer continues.  

---

