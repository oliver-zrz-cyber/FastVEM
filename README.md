# Academic Paper Project Page

这是一个学术论文项目主页模板，参考自 [Co-LOD](https://github.com/oliver-zrz-cyber/Co-LOD) 和 [Academic-project-page-template](https://github.com/eliahuhorwitz/Academic-project-page-template)。

## 快速开始

### 项目结构

```
PaperPages/
├── index.html                # 主文件，包含网页内容
├── static/
│   ├── css/
│   │   └── index.css        # 样式文件
│   ├── js/
│   │   └── index.js         # JavaScript脚本
│   ├── images/              # 放置图片文件夹
│   │   ├── favicon.ico      # 网站图标
│   │   ├── preview.png      # 社交媒体分享预览图
│   │   ├── result1.png      # 结果图片
│   │   └── ...
│   ├── videos/              # 放置视频文件夹
│   │   └── banner_video.mp4 # 展示视频
│   └── pdfs/                # 放置PDF文件夹
│       ├── paper.pdf
│       ├── paper_lowres.pdf
│       └── supplementary.pdf
└── README.md                # 此文件
```

## 如何自定义

### 1. 编辑基本信息

打开 `index.html` 文件，替换以下内容：

- **论文标题**: 找到 `<h1 class="title is-1 publication-title">` 并替换文本
- **作者信息**: 替换 `<span class="author-block">` 中的作者名字和链接
- **所属机构**: 替换 `<span class="author-block"><sup>1</sup>` 中的机构名称
- **发表会议/期刊**: 替换 `<span>CVPR 2024</span>` 为您的实际信息

### 2. 添加链接

更新以下按钮的链接：

- **论文PDF**: `./static/pdfs/paper.pdf`
- **代码仓库**: `https://github.com/yourname/yourrepo`
- **数据集**: `https://yourlink.com/dataset`
- **视频演示**: `https://youtu.be/videoid`

### 3. 添加媒体资源

#### 图片
- 将图片放在 `static/images/` 目录
- 在HTML中引用：`<img src="static/images/your_image.png" alt="描述" />`

#### 视频
- 将视频放在 `static/videos/` 目录
- 在HTML中引用：
```html
<video autoplay controls muted loop>
  <source src="static/videos/your_video.mp4" type="video/mp4">
</video>
```

#### PDF
- 将PDF放在 `static/pdfs/` 目录
- 在按钮中引用：`<a href="./static/pdfs/your_paper.pdf">`

### 4. 添加内容区域

HTML中包含了以下预制区域，可以选择性使用或注释掉不需要的部分：

- **Abstract** - 论文摘要
- **Main Results** - 主要结果和图片轮播
- **Method** - 方法说明和流程图
- **Video Section** - 视频演示（默认注释）
- **Comparisons** - 与其他方法的对比
- **BibTeX** - 论文引用格式
- **Acknowledgments** - 致谢

### 5. 替换网站图标

1. 准备你的网站图标文件（favicon.ico，建议 16x16 或 32x32 像素）
2. 替换 `static/images/favicon.ico`

### 6. 更新元数据

在HTML的 `<head>` 部分编辑以下元标签，用于搜索引擎优化和社交媒体分享：

```html
<meta name="description" content="您的论文描述">
<meta name="keywords" content="关键词1, 关键词2, 关键词3">
<meta property="og:title" content="您的论文标题">
<meta property="og:description" content="论文简要描述">
<meta property="og:image" content="static/images/preview.png">
```

## 核心组件说明

### 可用的HTML"积木块"

#### 1. Teaser 视频
```html
<section class="hero teaser">
  <div class="container is-max-desktop">
    <div class="hero-body">
      <video poster="" autoplay controls muted loop>
        <source src="static/videos/banner_video.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</section>
```

#### 2. 图片轮播
```html
<div id="results-carousel" class="carousel">
  <div class="item">
    <img src="static/images/result1.png" alt="Result 1" />
  </div>
  <div class="item">
    <img src="static/images/result2.png" alt="Result 2" />
  </div>
</div>
```

#### 3. YouTube 视频嵌入
```html
<section class="section">
  <div class="container is-max-desktop">
    <div class="publication-video">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
              frameborder="0" allow="autoplay; encrypted-media" 
              allowfullscreen></iframe>
    </div>
  </div>
</section>
```

#### 4. BibTeX 引用
```
@article{YourPaper2024,
  title={Your Paper Title},
  author={Author Names},
  journal={Journal or Conference},
  year={2024}
}
```

## 优化建议

### 图片和视频优化

- **图片分辨率**: 建议 1920x2048，通常不需要更高的分辨率
- **图片压缩**: 使用 [TinyPNG](https://tinypng.com/) 压缩图片
- **视频优化**: 
  - 视频大小 < 10MB 时可以直接放在网站上
  - 大于 10MB 的视频建议上传到 YouTube
  - 使用适当的视频编码以平衡大小和质量

### SEO 优化

- 完善 `<meta>` 标签
- 使用有意义的文件名
- 添加图片的 `alt` 属性
- 使用结构化的标题层级

### 网站分析

可以使用 [StatCounter](https://statcounter.com) 等免费工具来追踪网站访问情况（少于5分钟即可设置）。

## 用法示例

如何在你的主机上本地测试：

```bash
# 使用Python简单HTTP服务器
python -m http.server 8000

# 或使用Node.js http-server
npx http-server

# 然后在浏览器中访问
open http://localhost:8000
```

## 在 GitHub Pages 上发布

### 方式 1: 直接使用 GitHub Pages

1. 创建名为 `yourusername.github.io` 的仓库
2. 将所有文件上传到该仓库
3. 访问 `https://yourusername.github.io`

### 方式 2: 项目页面

1. 创建任何名称的仓库（如 `paper-project`）
2. 在仓库设置中启用 GitHub Pages
3. 访问 `https://yourusername.github.io/paper-project`

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式和响应式设计
- **JavaScript** - 交互功能
- **Bulma Framework** - CSS 框架
- **Font Awesome** - 图标库
- **Google Fonts** - 字体

## 致谢

本模板基于：
- [Nerfies 项目页面](https://nerfies.github.io/)
- [Academic-project-page-template](https://github.com/eliahuhorwitz/Academic-project-page-template)
- [Co-LOD](https://github.com/oliver-zrz-cyber/Co-LOD)

本网站采用 [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) 许可证。

## 常见问题

**Q: 如何添加更多作者？**
A: 在作者区域添加更多 `<span class="author-block">` 元素。

**Q: 能否自定义颜色？**
A: 可以编辑 `static/css/index.css` 文件中的颜色值。

**Q: 如何移除某个部分？**
A: 注释掉对应的 `<section>` 标签（使用 `<!-- -->` ）

**Q: 如何添加页脚链接？**
A: 编辑 `<footer>` 部分的 HTML 代码。

## 支持

如有问题或建议，欢迎提出 Issue 或联系原始模板维护者。

---

**最后更新**: 2024年
