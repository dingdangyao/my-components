// 导入组件，组件必须声明 name
import SvgIcon from "./SvgIcon.vue";

// 为组件提供 install 安装方法，供按需引入
SvgIcon.install = function(vue) {
  vue.component(SvgIcon.name, SvgIcon);
};

// 默认导出组件
export default SvgIcon;
