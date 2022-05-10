<template slot=Menu>
  <a-layout>
    <a-layout-sider>
      <div style="width: 218px" class="treeP">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>项目管理</template>
        <a-menu-item key="5">1</a-menu-item>
        <a-menu-item key="6">2</a-menu-item>
        <a-menu-item key="7">3</a-menu-item>
        <a-menu-item key="8">4</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background:null;height:10%;width: 85%;">
        <div id="select">
        <button>概述</button>   
        <button>计划</button>   
        <button>关联计划</button>   
        <button>团队</button>   
        <button>资源</button>   
        <button>资源负荷</button>   
        <button>项目计划基线</button>   
        <button>项目历史记录</button>   
        <button>项目计划变更单</button>   
        <button>项目变更历史</button>   
        <button>项目文件夹</button>   
        <button>预算成本</button>   
        <button>工作汇报</button>   
        <button>风险</button>   
        <button>问题</button>   
        <button>相关项目</button>   
        <button>项目监控</button>   
        <button>流程</button>   
        <button>权限</button>   
        <button>日志</button>   
        </div>   
      </a-layout-header>
      <a-layout-content >
        <ProjectPlan/>
      </a-layout-content>
      <a-layout-footer>
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, reactive, toRefs, watch } from 'vue';
import { PieChartOutlined, MailOutlined, DesktopOutlined, InboxOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import ProjectPlan from './ProjectPlan.vue';
import Footer from './Footer.vue';
export default defineComponent({
  name:'InfoMenu',
  components: {
    // MenuFoldOutlined,
    // MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    ProjectPlan,
    Footer
  },

  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    });
    watch(() => state.openKeys, (_val, oldVal) => {
      state.preOpenKeys = oldVal;
    });

    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return { ...toRefs(state),
      toggleCollapsed,
    };
  },

});
</script>


<style>
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-header {
  background: #6aa0c7;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-footer {
  background: #6aa0c7;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-sider {
  background: #3499ec;
}
#components-layout-demo-basic .ant-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-content {
  background: #107bcb;
}
#components-layout-demo-basic > .code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
 .ant-menu-dark{
    height: 678px;
    overflow-y: scroll;
 }
.ant-layout-header {
    height: 0px;
    padding: 0 50px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 20px;
    background: #001529;
    border: 10px;
}
</style>