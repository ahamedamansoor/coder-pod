'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Network, Route, TrendingUp, Code, Lightbulb, AlertCircle, CheckCircle } from 'lucide-react';

export default function DijkstraAlgorithm() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Network className="w-10 h-10 text-purple-600" />
          <h1 className="text-4xl font-bold text-foreground">Dijkstra's Algorithm</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Find the shortest path from a source node to all other nodes in a weighted graph.
        </p>
        <div className="flex items-center justify-center gap-2 mt-3">
          <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/20">Expert</Badge>
          <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/20">Graph Algorithms</Badge>
        </div>
      </div>

      {/* Algorithm Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600" />
            Algorithm Overview
          </CardTitle>
          <CardDescription>
            Greedy algorithm for finding shortest paths in weighted graphs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            <strong>Dijkstra's algorithm</strong> finds the shortest path from a starting node to all other nodes 
            in a graph with non-negative edge weights. It works by repeatedly selecting the unvisited node with 
            the smallest known distance, updating distances to its neighbors, and marking it as visited.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg border">
            <h4 className="font-semibold mb-2">Key Characteristics</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Works only with <strong className="text-foreground">non-negative edge weights</strong></li>
              <li>• Uses a <strong className="text-foreground">greedy approach</strong> - always picks the closest unvisited node</li>
              <li>• Time complexity: <strong className="text-foreground">O((V + E) log V)</strong> with min-heap</li>
              <li>• Space complexity: <strong className="text-foreground">O(V)</strong> for distance array and visited set</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            How Dijkstra's Algorithm Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">Initialize</h4>
                <p className="text-sm text-muted-foreground">
                  Set distance to source node as 0, and all other distances as infinity. 
                  Create a min-heap (priority queue) with all nodes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">Extract Minimum</h4>
                <p className="text-sm text-muted-foreground">
                  Pop the node with the smallest distance from the min-heap. This is your current node.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">Update Neighbors</h4>
                <p className="text-sm text-muted-foreground">
                  For each unvisited neighbor, calculate distance through current node. 
                  If shorter than known distance, update it and add to heap.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold mb-1">Repeat</h4>
                <p className="text-sm text-muted-foreground">
                  Continue steps 2-3 until the heap is empty or you've visited all nodes.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-600" />
            JavaScript Implementation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm overflow-x-auto">
{`class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(node, priority) {
        this.heap.push({ node, priority });
        this.bubbleUp(this.heap.length - 1);
    }
    
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }
    
    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent].priority <= this.heap[index].priority) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }
    
    bubbleDown(index) {
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            
            if (left < this.heap.length && 
                this.heap[left].priority < this.heap[smallest].priority) {
                smallest = left;
            }
            if (right < this.heap.length && 
                this.heap[right].priority < this.heap[smallest].priority) {
                smallest = right;
            }
            
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = 
                [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}

function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const minHeap = new MinHeap();
    
    // Initialize distances
    for (let node in graph) {
        distances[node] = node === start ? 0 : Infinity;
    }
    
    minHeap.push(start, 0);
    
    while (!minHeap.isEmpty()) {
        const { node: current, priority: currentDist } = minHeap.pop();
        
        if (visited.has(current)) continue;
        visited.add(current);
        
        // Check all neighbors
        for (let [neighbor, weight] of graph[current]) {
            const distance = currentDist + weight;
            
            // Relaxation step
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                minHeap.push(neighbor, distance);
            }
        }
    }
    
    return distances;
}

// Example Usage
const graph = {
    'A': [['B', 4], ['C', 2]],
    'B': [['C', 1], ['D', 5]],
    'C': [['D', 8], ['E', 10]],
    'D': [['E', 2]],
    'E': []
};

const shortestPaths = dijkstra(graph, 'A');
console.log(shortestPaths);
// Output: { A: 0, B: 4, C: 2, D: 9, E: 11 }`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Visual Example */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Route className="w-6 h-6 text-blue-600" />
            Step-by-Step Example
          </CardTitle>
          <CardDescription>
            Finding shortest paths from node A
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm">
{`Graph:
    A --4--> B
    |        |
    2        1
    |        |
    v        v
    C --8--> D --2--> E
    |
   10
    |
    v
    E

Step 0: distances = {A: 0, B: ∞, C: ∞, D: ∞, E: ∞}
Step 1: Visit A, update B(4), C(2)
        distances = {A: 0, B: 4, C: 2, D: ∞, E: ∞}
Step 2: Visit C, update D(10), E(12)
        distances = {A: 0, B: 4, C: 2, D: 10, E: 12}
Step 3: Visit B, update C(5-skip), D(9-better!)
        distances = {A: 0, B: 4, C: 2, D: 9, E: 12}
Step 4: Visit D, update E(11-better!)
        distances = {A: 0, B: 4, C: 2, D: 9, E: 11}
Step 5: Visit E (no neighbors)
        
Final: Shortest paths from A:
       A→A: 0, A→B: 4, A→C: 2, A→D: 9, A→E: 11`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Points */}
      <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-900 dark:text-green-100">
            <Lightbulb className="w-6 h-6" />
            Key Points to Remember
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Greedy Choice:</strong> Always select the unvisited node with smallest distance
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Relaxation:</strong> Update distance if path through current node is shorter
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Non-negative Weights:</strong> Algorithm fails with negative edge weights (use Bellman-Ford)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Min-Heap:</strong> Use priority queue for O((V+E) log V) complexity
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
            <AlertCircle className="w-6 h-6" />
            Common Mistakes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Using Dijkstra's with <strong>negative edge weights</strong> - won't work correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Not using a <strong>priority queue/min-heap</strong> - leads to O(V²) complexity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Forgetting to check if node is <strong>already visited</strong> before processing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Not initializing distances to <strong>Infinity</strong> except source (0)</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* LeetCode Problems */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Problems</CardTitle>
          <CardDescription>LeetCode problems to master Dijkstra's algorithm</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { num: 743, name: 'Network Delay Time', difficulty: 'Medium' },
              { num: 1334, name: 'Find the City With Smallest Number of Neighbors', difficulty: 'Medium' },
              { num: 1631, name: 'Path With Minimum Effort', difficulty: 'Medium' },
              { num: 787, name: 'Cheapest Flights Within K Stops', difficulty: 'Medium' },
              { num: 1514, name: 'Path with Maximum Probability', difficulty: 'Medium' },
              { num: 2045, name: 'Second Minimum Time to Reach Destination', difficulty: 'Hard' },
            ].map((problem, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">#{problem.num}</Badge>
                  <span className="font-medium">{problem.name}</span>
                </div>
                <Badge 
                  variant={problem.difficulty === 'Easy' ? 'default' : problem.difficulty === 'Medium' ? 'secondary' : 'destructive'}
                >
                  {problem.difficulty}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
