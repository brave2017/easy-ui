<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card shadow="hover">
        <div class="container">
          <el-icon size="50" color="#6BC6C5"><Avatar/></el-icon>
          <div class="container-item">
            <div><span style="font-size: 15px">用户数量</span></div>
            <div><span style="font-size: 30px; font-weight: bold;">1234</span></div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div class="container">
          <el-icon size="50" color="#57A1F0"><Comment/></el-icon>
          <div class="container-item">
            <div><span style="font-size: 15px">未读消息</span></div>
            <div><span style="font-size: 30px; font-weight: bold;">2</span></div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div class="container">
          <el-icon size="50" color="#E25D6F"><Money/></el-icon>
          <div class="container-item">
            <div><span style="font-size: 15px">收入统计</span></div>
            <div><span style="font-size: 30px; font-weight: bold;">1234.01</span></div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div class="container">
          <el-icon size="50" color="#61BCA4"><Shop/></el-icon>
          <div class="container-item">
            <div><span style="font-size: 15px">商品数量</span></div>
            <div><span style="font-size: 30px; font-weight: bold;">12</span></div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

  <el-row :gutter="20" style="margin-top: 20px">
    <el-col :span="12">
      <el-card shadow="hover" >
        <div id="main" style="width: 100%; height: 500px"></div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="hover" >
        <div id="main-1" style="width: 100%; height: 500px"></div>
      </el-card>
    </el-col>
  </el-row>

  <el-row :gutter="20" style="margin-top: 20px">
    <el-col :span="12">
      <el-card shadow="hover" >
        <div id="main-2" style="width: 100%; height: 500px"></div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="hover" >
        <div id="main-3" style="width: 100%; height: 500px"></div>
      </el-card>
    </el-col>
  </el-row>

</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.container-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';


const table1 = () => {
  type EChartsOption = echarts.EChartsOption;

  const chartDom = document.getElementById('main')!;
  const myChart = echarts.init(chartDom);
  let option: EChartsOption;

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };

  option && myChart.setOption(option);

}


const table2 = () => {
  type EChartsOption = echarts.EChartsOption;
  const chartDom = document.getElementById('main-1')!;
  const myChart = echarts.init(chartDom);
  let option: EChartsOption;

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  option && myChart.setOption(option);

}
const table3 = () => {
  type EChartsOption = echarts.EChartsOption;
  const chartDom = document.getElementById('main-2')!;
  const myChart = echarts.init(chartDom);
  let option: EChartsOption;

  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

}
onMounted(() => {
  table1()
  table2()
  table3()
});
</script>
