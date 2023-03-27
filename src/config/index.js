import Vue from 'vue'
import {
 Cascader,
 Input,
 Avatar,
 Dropdown,
 DropdownMenu,
 DropdownItem,
 Select,
 Option,
 Carousel,
 CarouselItem,
 Image,
 Row,Col,Card,
 Button,
 Breadcrumb,
 BreadcrumbItem,
 Divider,
 FormItem,
 Form,
 Radio,
 RadioGroup,
 Checkbox,
 CheckboxGroup,
 Dialog,
 Upload,
 Message,
 Switch,
 Autocomplete,
 Notification,
 TimePicker
}from 'element-ui'

Vue.use(TimePicker)
Vue.use(Autocomplete)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Divider)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Button)
Vue.use(Cascader)
Vue.use(Input)
Vue.use(Avatar)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Select)
Vue.use(Option)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification