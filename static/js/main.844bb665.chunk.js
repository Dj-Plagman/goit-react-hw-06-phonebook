(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(t,e,n){},26:function(t,e,n){t.exports={list:"ContactList_list__XlIp1",item:"ContactList_item__1IRYe",contact:"ContactList_contact__2yV0t",btn:"ContactList_btn__3bRXt"}},28:function(t,e,n){t.exports={form:"ContactForm_form__unDHb",label:"ContactForm_label__3YmGi",input:"ContactForm_input__me_ek",button:"ContactForm_button__2Nys9"}},29:function(t,e,n){t.exports={label:"Filter_label__1RIfM",input:"Filter_input__BGPcp"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(4),o=n.n(r),i=(n(19),n(5)),s=n(6),u=n(8),l=n(7),b=n(2),m="contacts/add",d="contacts/delete",j="contacts/changeFilter",h=n(33),p=(n(26),n(1)),f=Object(b.b)((function(t){var e=t.contacts,n=e.filter,c=e.contact,a=n.toLowerCase().trim(),r=c.filter((function(t){return t.name.toLowerCase().includes(a)}));return{contacts:r}}),(function(t){return{onDeleteContact:function(e){return t({type:d,payload:e})}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(p.jsxs)("li",{className:"item__contact",children:[Object(p.jsx)("p",{className:"item__text",children:c}),Object(p.jsx)("p",{className:"item__text",children:a}),Object(p.jsx)("button",{className:"item__buttom",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),_=n(12),O=(n(28),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(_.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number;if(t.props.contact.find((function(t){return t.name.toLowerCase()===c.toLowerCase()})))return alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(c," \u0437 \u0442\u0430\u043a\u0438\u043c \u0456\u043c\u2019\u044f\u043c \u0432\u0436\u0435 \u0454.")),void t.reset();t.props.onSubmit(c,a),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:"item__form",onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{children:["Name",Object(p.jsx)("input",{className:"item__input",type:"text",name:"name",placeholder:"Jony Dep",value:e,onChange:this.handleChange})]}),Object(p.jsxs)("label",{children:["Phone",Object(p.jsx)("input",{className:"item__input",type:"text",name:"number",placeholder:"111-11-11",value:n,onChange:this.handleChange})]}),Object(p.jsx)("button",{type:"submit",disabled:""===e||""===n,children:"Save"})]})}}]),n}(c.Component)),v=Object(b.b)((function(t){return{contact:t.contacts.contact}}),(function(t){return{onSubmit:function(e,n){return t(function(t,e){return{type:m,payload:{id:Object(h.a)(),name:t,number:e}}}(e,n))}}}))(O),x=(n(29),Object(b.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t((n=e.target.value,{type:j,payload:n}));var n}}}))((function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:"item__filter",children:[Object(p.jsx)("p",{className:"item__text-filter",children:"Find Contacts"}),Object(p.jsx)("input",{className:"item__element",type:"text",value:e,onChange:n})]})}))),C=(n(30),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.contact;return Object(p.jsxs)("div",{className:"Containet",children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(v,{}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(x,{}),!t.length&&Object(p.jsx)("div",{children:"No contacts, add a contact"}),Object(p.jsx)(f,{})]})}}]),n}(a.a.Component)),y=Object(b.b)((function(t){return{contact:t.contacts.contact}}))(C),g=n(3),S=n(13),N=n(14),w=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],k=Object(g.combineReducers)({contact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case m:return[].concat(Object(N.a)(t),[c]);case d:return t.filter((function(t){return t.id!==c}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;return n===j?c:t}}),F=Object(g.combineReducers)({contacts:k}),L=Object(g.createStore)(F,function(){try{var t=localStorage.getItem("persistantState");if(null===t)return;return JSON.parse(t)}catch(e){return void console.warn(e)}}(),Object(S.composeWithDevTools)());L.subscribe((function(){return function(t){try{var e=JSON.stringify(t);localStorage.setItem("persistantState",e)}catch(n){console.warn(n)}}(L.getState())}));var D=L;o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b.a,{store:D,children:Object(p.jsx)(y,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.844bb665.chunk.js.map