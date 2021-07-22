<template>

  <div class="tags-nav">
    <a href="javascript:void(0)" @click="handleScroll('left')">
      <icon name="angle-left"></icon>
    </a>
    <div class="tags-wrapper" ref="tagsWrapper">
      <div class="tags-wrapper-scroll" ref="tagsWrapperScroll" :style="{ left: leftOffset + 'px' }">
        <transition-group name="slide-fade">
          <el-tag class="tag slide-fade-item" ref="tagsPageOpened" v-for="(tag, index) in pageOpenedList"
            :key="'tag_' + index" :type="tag.selected ? '': 'info'" :closable="tag.name!='basicDevice'" :id="tag.name"
            effect="dark" :text="tag.name" @close="closeTag(index, $event, tag.name)" @click="tagSelected(index)">
            {{tag.title}}</el-tag>
        </transition-group>
      </div>
    </div>
    <a href="javascript:void(0)" @click="handleScroll('right')">
      <icon name="angle-right"></icon>
    </a>
    <!-- <el-dropdown class="dropdown-btn" @command="closeTags">
      <span class="el-dropdown-link">
        <icon name="angle-down"></icon>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="closeOthers">关闭其他</el-dropdown-item>
        <el-dropdown-item command="closeAll">关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
    <!-- <Dropdown  placement="bottom-end" @on-click="closeTags">
      <a href="javascript:void(0)" style="margin-right: 0;">
        <icon name="angle-down"></icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem name="closeOthers">关闭其他</DropdownItem>
        <DropdownItem name="closeAll">关闭所有</DropdownItem>
      </DropdownMenu>
    </Dropdown> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPageName: this.$route.name,
        leftOffset: 0
      }
    },
    props: {
      pageOpenedList: {
        type: Array
      }
    },
    methods: {
      closeTags(action) {
        this.$emit('closeTags', action)
        if (action === 'closeOthers') {
          this.leftOffset = 0
        }
      },
      closeTag(index, event, name) {
        // 移除单个tag，且首页的tag无法移除
        if (index !== 0) {
          this.$emit('closeTags', index, name)
        }
        if (this.currentPageName !== name) {
          this.leftOffset = Math.min(0, this.leftOffset + event.target.parentNode.offsetWidth)
        }
      },
      tagSelected(index) {
        this.$emit('tagSelected', index)
      },
      checkTagIsVisible(tag) {
        let visible = {
          isVisible: false,
          position: 'left'
        }
        const leftDiffValue = tag.offsetLeft + this.leftOffset
        if (leftDiffValue < 0) {
          return visible
        }
        const rightDiffValue = this.$refs.tagsWrapper.offsetWidth - this.leftOffset - tag.offsetWidth - tag.offsetLeft
        if (leftDiffValue >= 0 && rightDiffValue >= 0) {
          visible.isVisible = true
        } else {
          visible.position = 'right'
        }
        return visible
      },
      handleScroll(direaction) {
        // 获取在可视区域临界的tag
        let criticalTag = this.getCriticalTag(direaction)
        switch (direaction) {
          case 'left':
            this.leftOffset = Math.min(this.$refs.tagsWrapper.offsetWidth - criticalTag.$el.offsetLeft, 0)
            break
          case 'right':
            const diffValue1 = -(criticalTag.$el.offsetLeft + criticalTag.$el.clientWidth)
            const diffvalue2 = -(this.$refs.tagsWrapperScroll.offsetWidth - this.$refs.tagsWrapper.offsetWidth)
            this.leftOffset = Math.max(diffValue1, diffvalue2)
            break
          default:
            break
        }
      },
      getCriticalTag(direaction) {
        let criticalTag
        const refsTagList = this.$refs.tagsPageOpened
        for (let tag of refsTagList) {
          // 检查tag是否在可视区
          if (this.checkTagIsVisible(tag.$el).isVisible) {
            criticalTag = tag
            if (direaction === 'left') {
              break
            }
          }
        }
        return criticalTag
      },
      setTagsWrapperScrollPosition(tag) {
        const visible = this.checkTagIsVisible(tag)
        if (!visible.isVisible && visible.position === 'left') {
          // 标签位于可视区域的左侧
          this.leftOffset = -tag.offsetLeft
        } else {
          // 标签位于可视区域的右侧 or 可视区域
          this.leftOffset = Math.min(0, -(tag.offsetWidth + tag.offsetLeft - this.$refs.tagsWrapper.offsetWidth + 4))
        }
      }
    },
    mounted() {
      // 初始化当前打开页面的标签位置
      const refsTag = this.$refs.tagsPageOpened
      setTimeout(() => {
        for (const tag of refsTag) {
          if (tag.text === this.$route.name) {
            const tagNode = tag.$el
            this.setTagsWrapperScrollPosition(tagNode)
            break
          }
        }
      }, 1)
    },
    watch: {
      $route(to) {
        this.currentPageName = to.name
        this.$nextTick(() => {
          const refsTag = this.$refs.tagsPageOpened
          for (const tag of refsTag) {
            if (tag.text === this.$route.name) {
              const tagNode = tag.$el
              this.setTagsWrapperScrollPosition(tagNode)
              break
            }
          }
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  .tags-nav {
    display: flex;
    align-items: stretch;
    height: 40px;
    padding: 2px 0;
    background-color: @background-color;

    a {
      margin-right: 1px;
      width: 24px;
    }

    a:hover {
      color: @light-theme-color;
    }

    a:first-of-type {
      margin-right: 4px;
    }

    a,
    .dropdown-btn {
      display: inline-block;
      width: 30px;
      height: 36px;
      color: @title-color;
      background-color: @white;
      text-align: center;
      line-height: 36px;
      position: relative;
      z-index: 10;
    }

    .tags-wrapper {
      flex: 1 1 auto;
      position: relative;

      .tags-wrapper-scroll {
        position: absolute;
        top: 0px;
        left: 0;
        z-index: 5;
        height: 36px;
        overflow: visible;
        white-space: nowrap;
        transition: all .3s ease-in-out;

        .tag {
          flex-shrink: 0;
          cursor: pointer;
        }
      }
    }
  }
</style>