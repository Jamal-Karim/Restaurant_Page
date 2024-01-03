(()=>{"use strict";function e(){const e=document.createElement("div");e.classList.add("homepage");const t=document.createElement("header"),n=document.createElement("nav"),c=document.createElement("a");c.setAttribute("id","home"),c.href="#",c.textContent="Home";const a=document.createElement("a");a.setAttribute("id","menu"),a.href="#",a.textContent="Menu";const d=document.createElement("a");d.setAttribute("id","contact"),d.href="#",d.textContent="Contact",n.append(c),n.append(a),n.append(d),t.append(n);const o=document.createElement("div");o.classList.add("titleContainer");const s=document.createElement("h1");s.innerHTML="Pancake <br>House",s.classList.add("title"),o.append(s);const m=document.getElementById("content");return e.append(t),e.append(o),m.append(e),m}e();const t=document.getElementById("content");document.addEventListener("click",(n=>{"home"===n.target.id?(t.innerHTML="",e(),console.log("home clicked")):"menu"===n.target.id?(t.innerHTML="",function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("header"),n=document.createElement("nav"),c=document.createElement("a");c.setAttribute("id","home"),c.href="#",c.textContent="Home";const a=document.createElement("a");a.setAttribute("id","menu"),a.href="#",a.textContent="Menu";const d=document.createElement("a");d.setAttribute("id","contact"),d.href="#",d.textContent="Contact",n.append(c),n.append(a),n.append(d),t.append(n),e.append(t);const o=document.createElement("h1");o.textContent="Menu",e.append(o);const s=document.createElement("div");s.classList.add("gridContainer");const m=document.createElement("div");m.classList.add("option1");const l=document.createElement("h2");l.textContent="Fluffy Pancakes",l.classList.add("menuTitle"),m.append(l);const p=document.createElement("p");p.textContent="3 big and fluffy pancakes stacked on top of each other, topped off with maple syrup.",p.classList.add("menuText"),m.append(p);const r=document.createElement("p");r.textContent="$5.99",r.classList.add("menuPrice"),m.append(r),s.append(m);const i=document.createElement("div");i.classList.add("option2");const u=document.createElement("h2");u.textContent="French Toast",u.classList.add("menuTitle"),i.append(u);const E=document.createElement("p");E.textContent="4 French Toast slices made with cinamon batter and white bread, covered with maple syrup and powdered sugar.",E.classList.add("menuText"),i.append(E);const h=document.createElement("p");h.textContent="$2.99",h.classList.add("menuPrice"),i.append(h),s.append(i);const C=document.createElement("div");C.classList.add("option3");const L=document.createElement("h2");L.textContent="Blueberry Pancakes",L.classList.add("menuTitle"),C.append(L);const x=document.createElement("p");x.textContent="2 blueberry filled pancakes with boisonberry and boisonberry syrup.",x.classList.add("menuText"),C.append(x);const f=document.createElement("p");f.textContent="$6.99",f.classList.add("menuPrice"),C.append(f),s.append(C);const y=document.createElement("div");y.classList.add("option4");const b=document.createElement("h2");b.textContent="Chocolate Chip Pancakes",b.classList.add("menuTitle"),y.append(b);const T=document.createElement("p");T.textContent="3 chocolate chip filled pancakes with choice of syrup.",T.classList.add("menuText"),y.append(T);const v=document.createElement("p");v.textContent="$4.99",v.classList.add("menuPrice"),y.append(v),s.append(y),e.append(s);document.getElementById("content").append(e)}(),console.log("menu clicked")):"contact"===n.target.id&&(t.innerHTML="",function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("header"),n=document.createElement("nav"),c=document.createElement("a");c.setAttribute("id","home"),c.href="#",c.textContent="Home";const a=document.createElement("a");a.setAttribute("id","menu"),a.href="#",a.textContent="Menu";const d=document.createElement("a");d.setAttribute("id","contact"),d.href="#",d.textContent="Contact",n.append(c),n.append(a),n.append(d),t.append(n),e.append(t);const o=document.createElement("h1");o.classList.add("contactTitle"),o.textContent="Contact",e.append(o);const s=document.createElement("div");s.classList.add("contactContainer");const m=document.createElement("div");m.classList.add("address");const l=document.createElement("h2");l.textContent="Address",l.classList.add("addressTitle"),m.append(l);const p=document.createElement("p");p.textContent="12345 Broadway Street, Los Angeles, CA",p.classList.add("addressText"),m.append(p),s.append(m);const r=document.createElement("div");r.classList.add("hours");const i=document.createElement("h2");i.classList.add("hoursTitle"),i.textContent="Hours",r.append(i);const u={Monday:"Closed",Tuesday:"Closed",Wednesday:"Closed",Thursday:"Closed",Friday:"8:00 AM - 10:00 PM",Saturday:"8:00 AM - 10:00 PM",Sunday:"8:00 AM - 10:00 PM"},E=document.createElement("ul");for(let e in u){const t=document.createElement("li");t.textContent=`${e} : ${u[e]}`,E.append(t)}r.append(E),s.append(r);const h=document.createElement("div");h.classList.add("socials");const C=document.createElement("h2");C.textContent="Phone : 123-456-7890",h.append(C);const L=document.createElement("h2");L.innerHTML="Email : PancakeHouse<br>@gmail.com",h.append(L),s.append(h),e.append(s);document.getElementById("content").append(e)}(),console.log("contact clicked"))})),console.log("Hello from index.js")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBV3hELFNBQVNDLGNBQWMsTUFDeEN1RCxFQUFTL0MsWUFBYyx1QkFDdkI4QyxFQUFXM0MsT0FBTzRDLEdBRWxCLE1BQU1DLEVBQVV6RCxTQUFTQyxjQUFjLE1BQ3ZDd0QsRUFBUTFDLFVBQVkscUNBQ3BCd0MsRUFBVzNDLE9BQU82QyxHQUVsQlosRUFBVWpDLE9BQU8yQyxHQUNqQlgsRUFBV2hDLE9BQU9pQyxHQUVGN0MsU0FBU2lCLGVBQWUsV0FDaENMLE9BQU9nQyxFQUduQixDRnBFTWMsR0FDQW5DLFFBQVFDLElBQUksbUJBQ2QsSUFJSkQsUUFBUUMsSUFBSSxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XHJcblxyXG4gICAgLy9ob21lcGFnZSBkaXZcclxuICAgIGNvbnN0IGhvbWVQYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvbWVQYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJob21lcGFnZVwiKTtcclxuXHJcbiAgICAvL2hlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG5cclxuICAgIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBhMS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XHJcbiAgICBhMS5ocmVmID0gXCIjXCI7XHJcbiAgICBhMS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5cclxuICAgIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBhMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XHJcbiAgICBhMi5ocmVmID0gXCIjXCI7XHJcbiAgICBhMi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cclxuICAgIGNvbnN0IGEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBhMy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XHJcbiAgICBhMy5ocmVmID0gXCIjXCI7XHJcbiAgICBhMy50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICAgIG5hdi5hcHBlbmQoYTEpO1xyXG4gICAgbmF2LmFwcGVuZChhMik7XHJcbiAgICBuYXYuYXBwZW5kKGEzKTtcclxuICAgIGhlYWRlci5hcHBlbmQobmF2KTtcclxuXHJcbiAgICAvL3RpdGxlXHJcblxyXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlQ29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoMS5pbm5lckhUTUwgPSBcIlBhbmNha2UgPGJyPkhvdXNlXCJcclxuICAgIGgxLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIHRpdGxlRGl2LmFwcGVuZChoMSk7XHJcblxyXG4gICAgLy9hZGQgdG8gY29udGVudCBkaXZcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgIGhvbWVQYWdlRGl2LmFwcGVuZChoZWFkZXIpO1xyXG4gICAgaG9tZVBhZ2VEaXYuYXBwZW5kKHRpdGxlRGl2KTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZChob21lUGFnZURpdik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tICcuL2xvYWQuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gJy4vbWVudS5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH0gZnJvbSAnLi9jb250YWN0LmpzJztcclxuXHJcbmNyZWF0ZUhvbWVQYWdlKCk7XHJcblxyXG4vLyBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcclxuLy8gY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcbi8vIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xyXG5cclxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuXHJcbi8vIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcclxuLy8gICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuLy8gICAgIGNyZWF0ZUhvbWVQYWdlKCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcImhvbWUgY2xpY2tlZFwiKTtcclxuLy8gfSk7XHJcblxyXG4vLyBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XHJcbi8vICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbi8vICAgICBjcmVhdGVNZW51UGFnZSgpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJtZW51IGNsaWNrZWRcIik7XHJcbi8vIH0pO1xyXG5cclxuLy8gY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xyXG4vLyAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4vLyAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiY29udGFjdCBjbGlja2VkXCIpO1xyXG4vLyB9KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJob21lXCIpIHtcclxuICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBjcmVhdGVIb21lUGFnZSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImhvbWUgY2xpY2tlZFwiKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcIm1lbnVcIikge1xyXG4gICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIGNyZWF0ZU1lbnVQYWdlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVudSBjbGlja2VkXCIpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiY29udGFjdFwiKSB7XHJcbiAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJjb250YWN0IGNsaWNrZWRcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIGluZGV4LmpzXCIpOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpe1xyXG5cclxuICAgIC8vbWVudSBtYWluIGRpdlxyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG5cclxuICAgIC8vaGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcblxyXG4gICAgY29uc3QgYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGExLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcclxuICAgIGExLmhyZWYgPSBcIiNcIjtcclxuICAgIGExLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcblxyXG4gICAgY29uc3QgYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGEyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcclxuICAgIGEyLmhyZWYgPSBcIiNcIjtcclxuICAgIGEyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcblxyXG4gICAgY29uc3QgYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGEzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcclxuICAgIGEzLmhyZWYgPSBcIiNcIjtcclxuICAgIGEzLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gICAgbmF2LmFwcGVuZChhMSk7XHJcbiAgICBuYXYuYXBwZW5kKGEyKTtcclxuICAgIG5hdi5hcHBlbmQoYTMpO1xyXG4gICAgaGVhZGVyLmFwcGVuZChuYXYpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcclxuXHJcbiAgICAvL21lbnUgdGl0bGVcclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaDEudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKGgxKTtcclxuXHJcbiAgICAvL2dyaWQgY29udGFpbmVyXHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRDb250YWluZXJcIik7XHJcblxyXG4gICAgLy9kaWZmZXJlbnQgbWVudSBvcHRpb25zXHJcbiAgICAvL29wdGlvbjFcclxuICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb3B0aW9uMS5jbGFzc0xpc3QuYWRkKFwib3B0aW9uMVwiKTtcclxuXHJcbiAgICBjb25zdCBtZW51VGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgbWVudVRpdGxlMS50ZXh0Q29udGVudCA9IFwiRmx1ZmZ5IFBhbmNha2VzXCJcclxuICAgIG1lbnVUaXRsZTEuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XHJcbiAgICBvcHRpb24xLmFwcGVuZChtZW51VGl0bGUxKTtcclxuXHJcbiAgICBjb25zdCBtZW51VGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1lbnVUZXh0MS50ZXh0Q29udGVudCA9IFwiMyBiaWcgYW5kIGZsdWZmeSBwYW5jYWtlcyBzdGFja2VkIG9uIHRvcCBvZiBlYWNoIG90aGVyLCB0b3BwZWQgb2ZmIHdpdGggbWFwbGUgc3lydXAuXCJcclxuICAgIG1lbnVUZXh0MS5jbGFzc0xpc3QuYWRkKFwibWVudVRleHRcIik7XHJcbiAgICBvcHRpb24xLmFwcGVuZChtZW51VGV4dDEpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVQcmljZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1lbnVQcmljZTEudGV4dENvbnRlbnQgPSBcIiQ1Ljk5XCJcclxuICAgIG1lbnVQcmljZTEuY2xhc3NMaXN0LmFkZChcIm1lbnVQcmljZVwiKTtcclxuICAgIG9wdGlvbjEuYXBwZW5kKG1lbnVQcmljZTEpO1xyXG5cclxuICAgIGdyaWQuYXBwZW5kKG9wdGlvbjEpO1xyXG5cclxuICAgIC8vb3B0aW9uMlxyXG4gICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvcHRpb24yLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24yXCIpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBtZW51VGl0bGUyLnRleHRDb250ZW50ID0gXCJGcmVuY2ggVG9hc3RcIlxyXG4gICAgbWVudVRpdGxlMi5jbGFzc0xpc3QuYWRkKCdtZW51VGl0bGUnKTtcclxuICAgIG9wdGlvbjIuYXBwZW5kKG1lbnVUaXRsZTIpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbWVudVRleHQyLnRleHRDb250ZW50ID0gXCI0IEZyZW5jaCBUb2FzdCBzbGljZXMgbWFkZSB3aXRoIGNpbmFtb24gYmF0dGVyIGFuZCB3aGl0ZSBicmVhZCwgY292ZXJlZCB3aXRoIG1hcGxlIHN5cnVwIGFuZCBwb3dkZXJlZCBzdWdhci5cIlxyXG4gICAgbWVudVRleHQyLmNsYXNzTGlzdC5hZGQoXCJtZW51VGV4dFwiKTtcclxuICAgIG9wdGlvbjIuYXBwZW5kKG1lbnVUZXh0Mik7XHJcblxyXG4gICAgY29uc3QgbWVudVByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbWVudVByaWNlMi50ZXh0Q29udGVudCA9IFwiJDIuOTlcIlxyXG4gICAgbWVudVByaWNlMi5jbGFzc0xpc3QuYWRkKFwibWVudVByaWNlXCIpO1xyXG4gICAgb3B0aW9uMi5hcHBlbmQobWVudVByaWNlMik7XHJcblxyXG4gICAgZ3JpZC5hcHBlbmQob3B0aW9uMik7XHJcblxyXG4gICAgLy9vcHRpb24zXHJcbiAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG9wdGlvbjMuY2xhc3NMaXN0LmFkZChcIm9wdGlvbjNcIik7XHJcblxyXG4gICAgY29uc3QgbWVudVRpdGxlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIG1lbnVUaXRsZTMudGV4dENvbnRlbnQgPSBcIkJsdWViZXJyeSBQYW5jYWtlc1wiXHJcbiAgICBtZW51VGl0bGUzLmNsYXNzTGlzdC5hZGQoJ21lbnVUaXRsZScpO1xyXG4gICAgb3B0aW9uMy5hcHBlbmQobWVudVRpdGxlMyk7XHJcblxyXG4gICAgY29uc3QgbWVudVRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBtZW51VGV4dDMudGV4dENvbnRlbnQgPSBcIjIgYmx1ZWJlcnJ5IGZpbGxlZCBwYW5jYWtlcyB3aXRoIGJvaXNvbmJlcnJ5IGFuZCBib2lzb25iZXJyeSBzeXJ1cC5cIlxyXG4gICAgbWVudVRleHQzLmNsYXNzTGlzdC5hZGQoXCJtZW51VGV4dFwiKTtcclxuICAgIG9wdGlvbjMuYXBwZW5kKG1lbnVUZXh0Myk7XHJcblxyXG4gICAgY29uc3QgbWVudVByaWNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbWVudVByaWNlMy50ZXh0Q29udGVudCA9IFwiJDYuOTlcIlxyXG4gICAgbWVudVByaWNlMy5jbGFzc0xpc3QuYWRkKFwibWVudVByaWNlXCIpO1xyXG4gICAgb3B0aW9uMy5hcHBlbmQobWVudVByaWNlMyk7XHJcblxyXG4gICAgZ3JpZC5hcHBlbmQob3B0aW9uMyk7XHJcblxyXG4gICAgLy9vcHRpb240XHJcbiAgICBjb25zdCBvcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG9wdGlvbjQuY2xhc3NMaXN0LmFkZChcIm9wdGlvbjRcIik7XHJcblxyXG4gICAgY29uc3QgbWVudVRpdGxlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIG1lbnVUaXRsZTQudGV4dENvbnRlbnQgPSBcIkNob2NvbGF0ZSBDaGlwIFBhbmNha2VzXCJcclxuICAgIG1lbnVUaXRsZTQuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XHJcbiAgICBvcHRpb240LmFwcGVuZChtZW51VGl0bGU0KTtcclxuXHJcbiAgICBjb25zdCBtZW51VGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1lbnVUZXh0NC50ZXh0Q29udGVudCA9IFwiMyBjaG9jb2xhdGUgY2hpcCBmaWxsZWQgcGFuY2FrZXMgd2l0aCBjaG9pY2Ugb2Ygc3lydXAuXCJcclxuICAgIG1lbnVUZXh0NC5jbGFzc0xpc3QuYWRkKFwibWVudVRleHRcIik7XHJcbiAgICBvcHRpb240LmFwcGVuZChtZW51VGV4dDQpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVQcmljZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1lbnVQcmljZTQudGV4dENvbnRlbnQgPSBcIiQ0Ljk5XCJcclxuICAgIG1lbnVQcmljZTQuY2xhc3NMaXN0LmFkZChcIm1lbnVQcmljZVwiKTtcclxuICAgIG9wdGlvbjQuYXBwZW5kKG1lbnVQcmljZTQpO1xyXG5cclxuICAgIGdyaWQuYXBwZW5kKG9wdGlvbjQpO1xyXG5cclxuXHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChncmlkKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmFwcGVuZChtZW51Q29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcclxuXHJcbiAgICAvL21haW4gY29udGFjdCBkaXZcclxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuXHJcbiAgICAvL2hlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG5cclxuICAgIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBhMS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XHJcbiAgICBhMS5ocmVmID0gXCIjXCI7XHJcbiAgICBhMS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5cclxuICAgIGNvbnN0IGEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBhMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XHJcbiAgICBhMi5ocmVmID0gXCIjXCI7XHJcbiAgICBhMi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cclxuICAgIGNvbnN0IGEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBhMy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XHJcbiAgICBhMy5ocmVmID0gXCIjXCI7XHJcbiAgICBhMy50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICAgIG5hdi5hcHBlbmQoYTEpO1xyXG4gICAgbmF2LmFwcGVuZChhMik7XHJcbiAgICBuYXYuYXBwZW5kKGEzKTtcclxuICAgIGhlYWRlci5hcHBlbmQobmF2KTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kKGhlYWRlcik7XHJcblxyXG4gICAgLy9jb250YWN0IHRpdGxlXHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGgxLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0VGl0bGVcIik7XHJcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmQoaDEpO1xyXG5cclxuICAgIC8vY29udGFpbmVyXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGFpbmVyXCIpO1xyXG5cclxuICAgIC8vYWRkcmVzcyBkaXZcclxuICAgIGNvbnN0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkcmVzc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzc1wiKTtcclxuXHJcbiAgICAvL2FkZHJlc3MgdGl0bGVcclxuICAgIGNvbnN0IGgyQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGgyQWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQWRkcmVzc1wiO1xyXG4gICAgaDJBZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzVGl0bGVcIik7XHJcbiAgICBhZGRyZXNzRGl2LmFwcGVuZChoMkFkZHJlc3MpO1xyXG5cclxuICAgIC8vYWRkcmVzc1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTIzNDUgQnJvYWR3YXkgU3RyZWV0LCBMb3MgQW5nZWxlcywgQ0FcIjtcclxuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NUZXh0XCIpO1xyXG4gICAgYWRkcmVzc0Rpdi5hcHBlbmQoYWRkcmVzcyk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZChhZGRyZXNzRGl2KTtcclxuXHJcbiAgICAvL2hvdXJzIGRpdlxyXG4gICAgY29uc3QgaG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG91cnNEaXYuY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpO1xyXG5cclxuICAgIC8vaG91cnMgdGl0bGVcclxuICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBob3Vyc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1RpdGxlXCIpO1xyXG4gICAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9IFwiSG91cnNcIlxyXG4gICAgaG91cnNEaXYuYXBwZW5kKGhvdXJzVGl0bGUpO1xyXG5cclxuICAgIC8vbGlzdCBjb250ZW50XHJcbiAgICBjb25zdCBob3VycyA9IHtcclxuICAgICAgICBcIk1vbmRheVwiOiBcIkNsb3NlZFwiLFxyXG4gICAgICAgIFwiVHVlc2RheVwiOiBcIkNsb3NlZFwiLFxyXG4gICAgICAgIFwiV2VkbmVzZGF5XCI6IFwiQ2xvc2VkXCIsXHJcbiAgICAgICAgXCJUaHVyc2RheVwiOiBcIkNsb3NlZFwiLFxyXG4gICAgICAgIFwiRnJpZGF5XCI6IFwiODowMCBBTSAtIDEwOjAwIFBNXCIsXHJcbiAgICAgICAgXCJTYXR1cmRheVwiOiBcIjg6MDAgQU0gLSAxMDowMCBQTVwiLFxyXG4gICAgICAgIFwiU3VuZGF5XCI6IFwiODowMCBBTSAtIDEwOjAwIFBNXCIsXHJcbiAgICB9XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGZvciAobGV0IGRheSBpbiBob3Vycykge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gYCR7ZGF5fSA6ICR7aG91cnNbZGF5XX1gO1xyXG4gICAgICAgIHVsLmFwcGVuZChsaSk7XHJcbiAgICB9XHJcbiAgICBob3Vyc0Rpdi5hcHBlbmQodWwpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChob3Vyc0Rpdik7XHJcblxyXG4gICAgLy9zb2NpYWxzXHJcbiAgICBjb25zdCBzb2NpYWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNvY2lhbHNEaXYuY2xhc3NMaXN0LmFkZChcInNvY2lhbHNcIik7XHJcblxyXG4gICAgY29uc3QgaDJTb2NpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBoMlNvY2lhbC50ZXh0Q29udGVudCA9IFwiUGhvbmUgOiAxMjMtNDU2LTc4OTBcIjtcclxuICAgIHNvY2lhbHNEaXYuYXBwZW5kKGgyU29jaWFsKTtcclxuXHJcbiAgICBjb25zdCBoMkVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgaDJFbWFpbC5pbm5lckhUTUwgPSBcIkVtYWlsIDogUGFuY2FrZUhvdXNlPGJyPkBnbWFpbC5jb21cIjtcclxuICAgIHNvY2lhbHNEaXYuYXBwZW5kKGgyRW1haWwpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmQoc29jaWFsc0Rpdik7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZChjb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmFwcGVuZChjb250YWN0RGl2KTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVIb21lUGFnZSIsImhvbWVQYWdlRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGVhZGVyIiwibmF2IiwiYTEiLCJzZXRBdHRyaWJ1dGUiLCJocmVmIiwidGV4dENvbnRlbnQiLCJhMiIsImEzIiwiYXBwZW5kIiwidGl0bGVEaXYiLCJoMSIsImlubmVySFRNTCIsImNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnREaXYiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJtZW51Q29udGFpbmVyIiwiZ3JpZCIsIm9wdGlvbjEiLCJtZW51VGl0bGUxIiwibWVudVRleHQxIiwibWVudVByaWNlMSIsIm9wdGlvbjIiLCJtZW51VGl0bGUyIiwibWVudVRleHQyIiwibWVudVByaWNlMiIsIm9wdGlvbjMiLCJtZW51VGl0bGUzIiwibWVudVRleHQzIiwibWVudVByaWNlMyIsIm9wdGlvbjQiLCJtZW51VGl0bGU0IiwibWVudVRleHQ0IiwibWVudVByaWNlNCIsImNyZWF0ZU1lbnVQYWdlIiwiY29udGFjdERpdiIsImNvbnRhaW5lciIsImFkZHJlc3NEaXYiLCJoMkFkZHJlc3MiLCJhZGRyZXNzIiwiaG91cnNEaXYiLCJob3Vyc1RpdGxlIiwiaG91cnMiLCJ1bCIsImRheSIsImxpIiwic29jaWFsc0RpdiIsImgyU29jaWFsIiwiaDJFbWFpbCIsImNyZWF0ZUNvbnRhY3RQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==