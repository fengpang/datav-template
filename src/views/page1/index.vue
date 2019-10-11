<template>
  <div class="home">
    <div class="row">
      <DPanel class="item" text="折线图">
        <ve-line :theme="$store.state.echartsTheme" :data="chartData"></ve-line>
      </DPanel>
      <DPanel class="item" text="柱状图">
        <ve-histogram :theme="$store.state.echartsTheme" :data="chartData"></ve-histogram>
      </DPanel>    
      <DPanel class="item" text="环图">
        <ve-ring :theme="$store.state.echartsTheme" :data="chartData"></ve-ring>
      </DPanel>    
    </div>
    <div class="row">
      <DPanel class="item" text="条形图">
        <ve-bar :theme="$store.state.echartsTheme" :data="chartData"></ve-bar>
      </DPanel>
      <DPanel class="item" text="饼图">
        <ve-pie :theme="$store.state.echartsTheme" :data="chartData"></ve-pie>
      </DPanel>    
      <DPanel class="item" text="雷达图">
        <ve-radar :theme="$store.state.echartsTheme" :data="chartData"></ve-radar>
      </DPanel>    
    </div>
    <div class="row">
      <DPanel class="item" text="热力图">
        <ve-scatter :theme="$store.state.echartsTheme" :data="chartData"></ve-scatter>
      </DPanel>
      <DPanel class="item" text="地图">
        <ve-map :theme="$store.state.echartsTheme" :data="mapData"></ve-map>
      </DPanel>
      <DPanel class="item" text="热力地图">
        <ve-heatmap :theme="$store.state.echartsTheme" :settings="chartSettings" :data="hotMapData"></ve-heatmap>
      </DPanel>    
    </div>
  </div>
</template>

<script>

export default {
  name: 'page1',
  data () {
    this.chartSettings = {
      position: 'china',
      type: 'map',
      geo: {
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#111'
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      }
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      mapData: {
        columns: ['位置', '税收', '人口', '面积'],
        rows: [
          { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
          { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
          { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
          { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
        ]
      },
      hotMapData: {
        columns: ['lat', 'lng', '人数'],
        rows: [
          { 'lat': 115.892151, 'lng': 28.676493, '人数': 1000 },
          { 'lat': 117.000923, 'lng': 36.675807, '人数': 400 },
          { 'lat': 113.665412, 'lng': 34.757975, '人数': 800 },
          { 'lat': 114.298572, 'lng': 30.584355, '人数': 200 },
          { 'lat': 112.982279, 'lng': 28.19409, '人数': 100 },
          { 'lat': 113.280637, 'lng': 23.125178, '人数': 300 },
          { 'lat': 110.33119, 'lng': 20.031971, '人数': 800 },
          { 'lat': 104.065735, 'lng': 30.659462, '人数': 700 },
          { 'lat': 108.948024, 'lng': 34.263161, '人数': 300 },
          { 'lat': 103.823557, 'lng': 36.058039, '人数': 500 }
        ]
      }
    }
  }
}
</script>


<style lang="less">
  .row {
    display: flex;
    .item {
      width: 33.33333%;
    }
  }
</style>