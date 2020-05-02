<template>
  <div class="card">
    <el-row :span="24" :gutter="gutter">
      <el-col
        :md="6"
        :xs="12"
        :sm="8"
        v-for="(item, index) in this.cardData"
        :key="index"
      >
        <div class="card-content">
          <div class="card-head">
            <div class="card-head-img">
              <img
                :src="item.url"
                :key="index"
                alt="图像获取失败"
                object-fit="fill"
                @dblclick="imgClick(item, index)"
              />
            </div>
          </div>
          <div class="card-body">
            <div class="card-body-author">
              <el-avatar :size="20" :src="item.authorUrl"></el-avatar>
            </div>
            <div class="card-body-icon">
              <div class="card-body-icon-like" @click="likeClick(item, index)">
                <i :class="iconLike"></i>
                <span>{{ item.likeNum }}</span>
              </div>
              <div
                class="card-body-icon-download"
                @click="downloadClick(item, index)"
              >
                <i :class="iconDownload"></i>
                <span>{{ item.downloadNum }}</span>
              </div>
              <div
                class="card-body-icon-search"
                @click="searchClick(item, index)"
              >
                <i :class="iconSearch"></i>
              </div>
            </div>
          </div>
          <el-image-viewer
            v-if="showViewer"
            :on-close="closeViewer"
            :url-list="[srcUrl]"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import ElImageViewer from "element-ui/packages/image/src/image-viewer";
export default {
  name: "cardimg",
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      gutter: this.option.gutter || 5,
      iconLike: this.option.iconLike || "el-icon-star-off",
      iconDownload: this.option.iconDownload || "el-icon-download",
      iconSearch: this.option.iconSearch || "el-icon-search",
      likeClick: this.option.likeClick,
      downloadClick: this.option.downloadClick,
      searchClick: this.option.searchClick,
	  showViewer: false,
	  preview: this.option.preview || false,
      srcUrl: ""
    };
  },
  computed: {
    cardData: function() {
      return this.option.data || [];
    }
  },
  components: { ElImageViewer },
  methods: {
    imgClick(item, index) {
      if (this.preview) {
        this.srcUrl = item.imgUrl;
        this.showViewer = true;
      }
      this.$emit("img-click", item, index);
    },
    closeViewer() {
      this.showViewer = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  &-content {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
    width: 300px;
    height: 200px;
    &:hover {
      .card-body {
        display: flex;
        opacity: 0.7; //设置不透明级别
      }
    }
  }
  &-body {
    height: 30px;
    margin-top: -30px;
    background: #f4f6f7;
    position: relative;
    display: none; //不为其保留空间，visible为其留有空间
    justify-content: space-around; //在弹性盒对象的 <div> 元素中的各项周围留有空白：
    z-index: 100;
    &-author {
      padding-top: 5px;
    }
    &-icon {
      display: flex;
      align-items: center;
      font-size: 10px;
      i {
        font-size: 18px;
      }
      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
