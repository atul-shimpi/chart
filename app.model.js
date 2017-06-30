/**
 * This variable provides the model data for our application. All that's needed to alter what pages exist in the
 * dashboard, what sections exist in each page, what components are shown in each section, what visualization to
 * display in each component, or what query to use as the data source for a component is to modify this object.
 */
var appModel = {
	pages: {
		serverlistview: {
			name: 'Server List',
			title: 'Server List',
			sections:[
				{
					components: [
						{
							query: 'SELECT * FROM LogDetails',
							visualizationType: 'textview',
							visualizationConfig: {displayItem:[
								['', 'ServerName',''],
								['', 'ServerIP',''],
								['Store Number:', 'StoreNumber','RECT'],
								['Last Updated', 'SrvStatDateTime',''],
								['CPU:', 'CPU',''],
								['Memory:', 'Memory',''],
								['Disk C Free:', 'CDrive',''],
								['Disk D Free:', 'DDrive',''],
								['Disk E Free:', 'EDrive',''],								
								['SQL Memory:', 'SQLMemory',''],
								['Truevue:', 'Truevue',''],
								['Fulfillment Sites','','CIRC'],
								['Error:', 'ErrorCount','ECLIP-red'],
								['Debug:', 'DebugCount','ECLIP-yellow'],
								['Info:', 'InfoCount','ECLIP-orange'],
								['Fine:', 'FineCount','ECLIP-green']
							]},
							colSpan: 6,
							height: 800
						}
					]
				}
			]
		},
		serverdetailsview: {
			name: 'Server Metrics',
			title: 'Server Metrics Trend <??>',
			sections: [
				{
					components: [
						{
							query: 'SELECT SrvStatDateTime, CPU, Memory, CDrive, SQLMemory, Truevue FROM LogDetails WHERE ServerName = \'<??>\'',
							//query: 'SELECT SrvStatDateTime, CPU, Memory FROM ItemsSales WHERE ServerName = \'ME001ASRFI21\' WHEN SrvStatDateTime BETWEEN now()-seconds(120) AND now()',
							//query: 'SELECT * from LogDetails',
							visualizationType: 'chart',
							visualizationConfig: {
								title: 'Server Trend',
								plotType: 'line',
								options: {
									xAxis:{
										title: {
											text: 'Time (EST)'
										},
										
										type: 'category',//, //time
										//tickInterval: 1 * 1000 * 60
										//minRange: 180000
									},
									yAxis: [
										{
										title: {
											text: 'Metrics'
										}},
										/*{
											title: {
												text: 'CPU',
												style: {
													color: '#0000B0'
												}
											},
											labels: {
												style: {
													color: '#0000B0'
												}
											}
										},
										{
											title: {
												text: 'Memory',
												style: {
													color: '#00B000'
												}
											},
											labels: {
												format: '${value}',
												style: {
													color: '#00B000'
												}
											},
											opposite: true
										}*/
									]
								},
								categoryField: 'SrvStatDateTime',
								series: [
									{
										name: 'CPU',
										valueField: 'CPU',
										color: '#0000B0',
										pointInterval:  1 * 1000 * 60,
            							//pointStart: Date.UTC(2016, 12, 07, 18, 8, 0, 0),
										data:[]
										/*data:[	['2016-12-07 18:08:02', 10], 
												['2016-12-07 18:09:02', 20], 
												['2016-12-07 18:10:02', 30]]*/
									},
									{
										name: 'Memory',
										valueField: 'Memory',
										color: '#00B000',
										pointInterval:  1 * 1000 * 60,
           								//pointStart: Date.UTC(2016, 12, 07, 18, 8, 0, 0),
										//yAxis: 1,
										data:[]
										/*data:[	['2016-12-07 18:08:02', 40], 
												['2016-12-07 18:09:02', 50], 
												['2016-12-07 18:10:02', 60]]*/
									},
									{
										name: 'CDrive',
										valueField: 'CDrive',
										color: '#800080',
										pointInterval:  1 * 1000 * 60,
           								//pointStart: Date.UTC(2016, 12, 07, 18, 8, 0, 0),
										//yAxis: 1,
										data:[]
										/*data:[	['2016-12-07 18:08:02', 45], 
												['2016-12-07 18:09:02', 55], 
												['2016-12-07 18:10:02', 65]]*/
									},
									{
										name: 'SQLMemory',
										valueField: 'SQLMemory',
										color: '#F000F0',
										pointInterval:  1 * 1000 * 60,
           								//pointStart: Date.UTC(2016, 12, 07, 18, 8, 0, 0),
										//yAxis: 1,
										data:[]
										/*data:[	['2016-12-07 18:08:02', 45], 
												['2016-12-07 18:09:02', 55], 
												['2016-12-07 18:10:02', 65]]*/
									},
									{
										name: 'Truevue',
										valueField: 'Truevue',
										color: '#A000A0',
										pointInterval:  1 * 1000 * 60,
           								//pointStart: Date.UTC(2016, 12, 07, 18, 8, 0, 0),
										//yAxis: 1,
										data:[]
										/*data:[	['2016-12-07 18:08:02', 45], 
												['2016-12-07 18:09:02', 55], 
												['2016-12-07 18:10:02', 65]]*/
									}
								]
							},
							colSpan: 12,
							height: 400
						}
					]
				},
				{
					components: [
						{
							query: 'select * from LogDetails WHERE ServerName = \'<??>\'',
							visualizationType: 'textview',
							visualizationConfig: {displayItem:[
								['', 'ServerName',''],
								['', 'ServerIP',''],
								['Store Number:', 'StoreNumber','RECT'],
								['Last Updated', 'SrvStatDateTime',''],
								['CPU:', 'CPU',''],
								['Memory:', 'Memory',''],
								['Disk C Free:', 'CDrive',''],
								['Disk D Free:', 'DDrive',''],
								['Disk E Free:', 'EDrive',''],								
								['SQL Memory:', 'SQLMemory',''],
								['Truevue:', 'Truevue',''],
								['Fulfillment Sites','','CIRC'],
								['Error:', 'ErrorCount','ECLIP-red'],
								['Debug:', 'DebugCount','ECLIP-yellow'],
								['Info:', 'InfoCount','ECLIP-orange'],
								['Fine:', 'FineCount','ECLIP-green']
							]},
							color: '#0000B0',
							colSpan: 12,
							height: 300
						}
					]
				}

			]
		}
	}
};