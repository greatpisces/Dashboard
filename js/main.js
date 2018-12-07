$(function() {
    $('#menu').click(toggleSidebar);

    var myChart = echarts.init(document.getElementById("ability"));

    var option = {
        tooltip : {
            trigger: 'axis'
        },
        polar : [
            {
                indicator : [
                    {text : 'HP', max  : 100},
                    {text : '攻击', max  : 100},
                    {text : '防御', max  : 100},
                    {text : '特攻', max  : 100},
                    {text : '特防', max  : 100},
                    {text : '速度', max  : 100}
                ],
                radius : 130
            }
        ],
        series : [
            {
                name: '种族值',
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data : [
                    {
                        value : [78, 84, 78, 99, 85, 100],
                        name : '种族值'
                    }
                ]
            }
        ]
    };

    myChart.setOption(option);
});

function toggleSidebar() {
    $("body").toggleClass("sidebar-open");
}