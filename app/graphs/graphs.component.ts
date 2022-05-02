import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.sass']
})
export class GraphsComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  // constructor() { }
    title = 'dynamic-plots';
    // Bar Chart
    graph1 = {
      data: [
        { x: [1, 2, 3, 5], y: [2, 3, 4, 5], type: 'bar' },
      ],
      layout: {
        title: 'Bar Plot',
        width: 700,
        height: 500
      }
    };
    // Line chart
    graph2 = {
      data: [
        { x: [1, 2, 4, 5], y: [1, 4, 9, 4, 1], type: 'scatter' },
        { x: [1, 2, 4, 5], y: [1, 3, 6, 9, 6], type: 'scatter' },
        { x: [1, 2, 4, 5], y: [1, 2, 4, 5, 6], type: 'scatter' },
      ],
      layout: {
        title: 'Scatter Plot',
        width: 700,
        height: 500
      }
    };
   
    graph5 = {
      data: [{
        x: [1, 2, 3, 4],
        y: [14, 11, 12, 13],
        mode: 'markers',
        marker: {
          size: [40, 60, 80, 100]
        }
      }],
      layout: [{
        title: 'Marker Size',
        showlegend: true,
        width: 500,
        height: 500
      }]
    }
  }
