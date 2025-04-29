---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
custom_js: 
  - /assets/js/busuanzi.pure.mini.js
---



<style>
    .carousel-caption {
        background: rgba(0, 0, 0, 0.5); /* 半透明背景 */
        padding: 20px;
        border-radius: 10px;
    }
    .carousel-caption h5 {
        font-size: 24px;
        font-weight: bold;
    }
    .carousel-caption p {
        font-size: 16px;
    }

    /* 为方形图片单独设置样式 */
    .square-image {
        width: auto; /* 根据高度调整宽度 */
        height: 100%;
    }


</style>

<h1 class="text-center mb-4">首页</h1>

***

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <!-- 第一张图片 -->
        <div class="carousel-item active">
            <div class="ratio ratio-16x9">
              <a href="https://arxiv.org/abs/2410.18817" target="_blank">
                <img src="/images/about/carousel/MACE_conceptual_design.png" class="d-block w-100" alt="图片1" style="object-fit: contain;">
              </a>
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h5 class="mt-1">Conceptual Design of the Muonium-to-Antimuonium Conversion Experiment (MACE)</h5>
                <!-- <p>Conceptual Design of the Muonium-to-Antimuonium Conversion Experiment (MACE)</p> -->
            </div>
        </div>
        <!-- 第二张图片 -->
        <div class="carousel-item">
            <div class="ratio ratio-16x9">
              <a href="https://arxiv.org/abs/2408.17114" target="_blank">
                <img src="/images/about/carousel/MACE_EventDisplay_04_ps-min.png" class="d-block w-100" alt="图片2" style="object-fit: contain;">
              </a>
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h5 class="mt-1">Design of a CsI(Tl) Calorimeter for Muonium-to-Antimuonium Conversion Experiment</h5>
                <!-- <p>这是第二张图片的描述文字。</p> -->
            </div>
        </div>
        <!-- 第三张图片 -->
        <div class="carousel-item">
            <div class="ratio ratio-16x9">
              <a href="https://arxiv.org/abs/2502.10702" target="_blank">
                <img src="/images/about/carousel/tensor_constraints_2D_2.png" class="d-block w-100 square-image" alt="图片3" style="object-fit: contain;">
              </a>
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h5 class="mt-1">Tensor interaction in coherent elastic neutrino-nucleus scattering</h5>
                <!-- <p>这是第三张图片的描述文字。</p> -->
            </div>
        </div>
        <!-- 第四张图片 -->
        <div class="carousel-item">
            <div class="ratio ratio-16x9">
              <a href="hhttps://link.springer.com/article/10.1007/s41365-024-01442-0" target="_blank">
                <img src="/images/about/carousel/mbm.png" class="d-block w-100" alt="图片4" style="object-fit: contain;">
              </a>
            </div>
            <div class="carousel-caption d-none d-md-block">
                <h5>Development of a SciFi-based beam monitor for COMET</h5>
                <!-- <p>这是第四张图片的描述文字。</p> -->
            </div>
        </div>
    </div>
    <!-- 上一张/下一张按钮 -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">上一张</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">下一张</span>
    </button>
</div>
<!-- <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="/path/to/image1.jpg" class="d-block w-100" alt="图片1">
        </div>
        <div class="carousel-item">
            <img src="/path/to/image2.jpg" class="d-block w-100" alt="图片2">
        </div>
        <div class="carousel-item">
            <img src="/path/to/image3.jpg" class="d-block w-100" alt="图片3">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">上一张</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">下一张</span>
    </button>
</div> -->

***

<div class="card">
    <div class="card-body shadow">
        <h3 class="card-title text-center">便携式宇宙射线缪子探测器演示仪</h3>
        <!-- <p class="card-text">这是一个视频播放器的示例。</p> -->
    </div>
    <div class="ratio ratio-16x9">
        <video controls>
            <source src="{{ '/videos/muon_200kbps.mp4' | relative_url }}" type="video/mp4">
            <!-- <source src="{{ '/assets/videos/example.webm' | relative_url }}" type="video/webm"> -->
            您的浏览器不支持视频播放。
        </video>
    </div>

</div>

***

<h2 class="text-center">最新动态</h2>
<div class="list-group">

<p class="mb-1 list-group-item list-group-item-action active" aria-current="true">如无特殊情况，每周日上午九点 本科生科研项目组会</p>
        {% assign sorted_news = site.data.news-data | sort: "date" | reverse %}
        {% for item in sorted_news limit: 5 %}
        <div class="d-flex w-100 justify-content-between list-group-item list-group-item-action">
          <p class="mb-1">{{ item.content }}                    
            {% if forloop.first %}
              <span class="badge bg-primary">最新</span>
            {% endif %}</p>
          <small class="text-muted">{{ item.date | date: "%Y年%m月%d日" }}</small>
        </div>
        {% endfor %}

<a href="/news-all" class="list-group-item list-group-item-action text-white-50 bg-secondary" aria-current="true">
<small>查看全部</small>
</a>
</div>


***

《庄子 • 天下篇》说到：“一尺之棰，日取其半，万世不竭。”物质世界是可分的，究竟是由什么组成？如何组成的？大到宇宙演化的奥秘，小到质子中子内部诡异的夸克禁闭，我们生活在神奇的粒子世界。粒子物理标准模型告诉我们，缤纷多彩的世界是由三代夸克、三代轻子和传递相互作用的玻色子组成。然而，粒子物理实验和天文观测不断发现超越标准模型的新物理，微观世界仍然存在很多未解之谜：中微子味道和质量起源是什么？是否存在带电轻子味道破坏过程？是否存在超越标准模型的新粒子和新相互作用？暗物质本质是什么？... 本课题组的研究方向包括中微子物理、缪子物理、暗物质物理研究、新型粒子探测器的研发和天河二号在高能物理的应用等。 本课题组拥有缪子科学与应用实验室（SYSU MuOn and Optical TomograpHy, 简称SMOOTH），以此为依托研究加速器缪子和宇生缪子的前沿科学和技术应用。本课题组参与多个国际粒子物理实验合作组，包括JUNO、BESIII和COMET等。

<p id="about-text"> <font color="red"> <b>人才需求：博士后，特聘研究员，科研助理等。每年拟招收硕士生2名，博士生1名。</b></font></p>
***
Am I content? — No, and I hope I never will be.The day you wake up and everything's perfect – what's left? What direction is there to go? Much better to wake every morning to matters which worry you a bit, affairs that demand your attention and work you feel must get done. These are the things that keep me going. I love to search for solutions, to solve things. I guess you could even say that… Problems make me happy.

<p style="text-align: right;">
    ——— Renzo Rosso, Founder and Owner of Diesel
</p>


<div id="bottom-contact" class="container mt-5">
    <h2 class="text-center mb-4">联系我们</h2>
    <ul class="list-unstyled text-left">
        <li class="bottom-link-li mb-2">
            <i class="fas fa-map-marker-alt"></i> 地址：广州市海珠区新港西路135号
        </li>
        <li class="bottom-link-li mb-2">
            <i class="fas fa-envelope"></i> 邮编：510275
        </li>
        <li class="bottom-link-li mb-2">
            <i class="fas fa-envelope"></i> 反馈邮箱：<a href="mailto:root@iyu.icu" class="text-decoration-none">root@iyu.icu</a>
        </li>
        <li class="bottom-link-li mb-2">
            <i class="fas fa-users"></i> <span id="busuanzi_container_site_uv">本站访客数：<span id="busuanzi_value_site_uv"></span>人次</span>
        </li>
        <li class="bottom-link-li mb-2">
            <i class="fas fa-eye"></i> <span id="busuanzi_container_site_pv">本站总访问量：<span id="busuanzi_value_site_pv"></span>次</span>
        </li>
    </ul>
</div>

<div class="container my-5">
        <h2 class="text-center mb-4">友情链接</h2>
        <div class="row">
            <!-- 友情链接 1 -->
            <div class="col-md-3 col-sm-6 mb-4">
                <a href="https://www.sysu.edu.cn/" target="_blank" class="text-decoration-none">
                    <div class="card h-100 text-center">
                        <div class="card-body d-flex align-items-center justify-content-center">
                            <h3 class="card-text" style="margin: 0;">中山大学</h3>
                            <!-- <p class="card-text">这是一个友情链接的描述。</p> -->
                        </div>
                    </div>
                </a>
            </div>
            <!-- 友情链接 2 -->
            <div class="col-md-3 col-sm-6 mb-4">
                <a href="https://spe.sysu.edu.cn/" target="_blank" class="text-decoration-none">
                    <div class="card h-100 text-center">
                        <div class="card-body d-flex align-items-center justify-content-center">
                            <h3 class="card-text" style="margin: 0;">中山大学物理学院</h3>
                            <!-- <p class="card-text">这是一个友情链接的描述。</p> -->
                        </div>
                    </div>
                </a>
            </div>
            <!-- 友情链接 3 -->
            <div class="col-md-3 col-sm-6 mb-4">
                <a href="http://www.nscc-gz.cn/" target="_blank" class="text-decoration-none">
                    <div class="card h-100 text-center">
                        <div class="card-body d-flex align-items-center justify-content-center">
                            <h3 class="card-text" style="margin: 0;">天河二号超级计算机</h3>
                            <!-- <p class="card-text">这是一个友情链接的描述。</p> -->
                        </div>
                    </div>
                </a>
            </div>
            <!-- 友情链接 4 -->
            <div class="col-md-3 col-sm-6 mb-4">
                <a href="http://www.ihep.cas.cn/" target="_blank" class="text-decoration-none">
                    <div class="card h-100 text-center">
                        <div class="card-body d-flex align-items-center justify-content-center">
                            <h3 class="card-text" style="margin: 0;">中国科学院高能物理研究所</h3>
                            <!-- <p class="card-text">这是一个友情链接的描述。</p> -->
                        </div>
                    </div>
                </a>
            </div>
            <!-- 友情链接 5 -->
            <div class="col-md-3 col-sm-6 mb-4">
                <a href="http://juno.ihep.cas.cn/" target="_blank" class="text-decoration-none">
                    <div class="card h-100 text-center">
                        <div class="card-body d-flex align-items-center justify-content-center">
                            <h3 class="card-text" style="margin: 0;">江门中微子国际合作组</h3>
                            <!-- <p class="card-text">这是一个友情链接的描述。</p> -->
                        </div>
                    </div>
                </a>
            </div>
            <!-- 友情链接 6 -->
            <div class="col-md-3 col-sm-6 mb-4">
                <a href="https://comet.kek.jp/" target="_blank" class="text-decoration-none">
                    <div class="card h-100 text-center">
                        <div class="card-body d-flex align-items-center justify-content-center">
                            <h3 class="card-text" style="margin: 0;">COMET国际合作组</h3>
                            <!-- <p class="card-text">这是一个友情链接的描述。</p> -->
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>


<script>

</script> 