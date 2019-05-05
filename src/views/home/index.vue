<template>
  <div class="main-container">
    <div class="mian-left">
      <div class="mian-left-banner">
        <el-carousel trigger="click" height="180px" interval="100000">
          <el-carousel-item v-for="item in 4" :key="item">
            <!--<h4>{{ item }}</h4>-->
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="mian-left-content">
        <div class="mian-left-content-header">
          <h4>欢迎欢迎</h4>
        </div>
        <div class="mian-left-content-list">
          <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div class="item-img">
              <a>
                <img src="../../assets/img/bg_default_image_h.png"/>
              </a>
            </div>
            <div class="item-info">
              <h5>
                <a class="item-title">哈哈哈哈哈</a>
              </h5>
              <div class="item-rate">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
            </div>
          </el-card>
          <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div class="item-img">
              <a>
                <img src="../../assets/img/bg_default_image_h.png"/>
              </a>
            </div>
            <div class="item-info">
              <h5>
                <a class="item-title">哈哈哈哈哈</a>
              </h5>
              <div class="item-rate">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
            </div>
          </el-card>
          <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div class="item-img">
              <a>
                <img src="../../assets/img/bg_default_image_h.png"/>
              </a>
            </div>
            <div class="item-info">
              <h5>
                <a class="item-title">哈哈哈哈哈</a>
              </h5>
              <div class="item-rate">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
            </div>
          </el-card>
          <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div class="item-img">
              <a>
                <img src="../../assets/img/bg_default_image_h.png"/>
              </a>
            </div>
            <div class="item-info">
              <h5>
                <a class="item-title">哈哈哈哈哈</a>
              </h5>
              <div class="item-rate">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
            </div>
          </el-card>
          <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div class="item-img">
              <a>
                <img src="../../assets/img/bg_default_image_h.png"/>
              </a>
            </div>
            <div class="item-info">
              <h5>
                <a class="item-title">哈哈哈哈哈</a>
              </h5>
              <div class="item-rate">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="mian-right">

      <div class="mian-right-update">
        <h4>右边菜单</h4>

        <ul>
          <li class="wk-nav">
            <a>月曜</a>
          </li>
          <li class="wk-nav">
            <a>火曜</a>
          </li>
          <li class="wk-nav">
            <a>水曜</a>
          </li>
          <li class="wk-nav">
            <a>木曜</a>
          </li>
          <li class="wk-nav">
            <a>金曜</a>
          </li>
          <li class="wk-nav">
            <a>土曜</a>
          </li>
          <li class="wk-nav">
            <a>日曜</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        value: 3.7
      }
    },
    computed: {},
    created () {
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="scss">
  .main-container {
    position: relative;

    .mian-left {
      margin-right: 280px;

      .mian-left-banner {
        width: 100%;
        height: 200px;
        background: #fff;

        .el-carousel {
          text-align: center;
          margin: 0 auto;
          padding: 10px 10px 0 10px;

          &__item {
            width: 200px;
          }

          &__button {
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }
        }

        /*.el-carousel__item h3 {*/
        /*color: #475669;*/
        /*font-size: 14px;*/
        /*opacity: 0.75;*/
        /*line-height: 150px;*/
        /*margin: 0;*/
        /*}*/

        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
          background-color: #d3dce6;
        }
      }

      .mian-left-content {
        width: 100%;
        background: #fff;
        margin-top: 40px;
        padding: 1rem 1rem;

        &-header {
          border-bottom: 1px solid #dee2e6;

          > h4 {
            font-size: 1.3rem;
            text-align: left;
            margin: 0;
            padding: 0;
            padding-bottom: 0.6rem;
          }
        }

        &-list {
          width: 100%;
          margin-top: 0.6rem;
          display: flex;
          flex-wrap: wrap;

          .box-card {
            width: 150px;
            margin-right: 10px;
            margin-bottom: 10px;

            .el-card__body {
              padding: 0px !important;
            }
          }

          .item-img {
            > a img {
              width: 100%;
              height: 160px;
            }
          }

          .item-info {
            padding: 10px;

            > h5 {
              margin: 0px;
              padding: 0px;
              text-align: left;
            }

            .item-title {
              color: #373f54;
              cursor: pointer;
              font-size: 0.8rem;
            }

            .item-rate {
              text-align: left;
              margin-top: 3px;
              .el-rate {
                height: 15px;
              }
              .el-rate__icon {
                font-size: 12px !important;
              }
              .el-rate__text {
                font-size: 9px !important;
              }
            }
          }
        }
      }
    }

    .mian-right {
      width: 250px;
      height: 250px;
      background: #fff;
      position: absolute;
      top: 0;
      right: 0;

      &-update {
        padding: 1rem;

        > h4 {
          padding: 0px;
          margin: 0px;
          text-align: left;
          font-size: 1.1rem;
        }

        > ul {
          list-style: none;
          width: 100%;
          display: flex;
          margin: 10px 0;
          padding: 0px;
        }

        .wk-nav {
          width: 50px;
          color: #999;
          font-size: 0.8rem;

          > a {
            color: #666;
            cursor:pointer;
          }


        }

      }
    }
  }

</style>
