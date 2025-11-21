import { Injectable } from '@nestjs/common';
import { BlogPost } from '@nest-react/domain';

@Injectable()
export class PostsService {
  private posts: BlogPost[] = [
    {
      id: 1,
      title: 'NestJS 架构深度解析',
      summary:
        '深入探讨 NestJS 的模块化设计、依赖注入机制以及如何构建可扩展的服务端应用。',
      date: '2023-10-24',
      tags: ['NestJS', 'Backend', 'Architecture'],
    },
    {
      id: 2,
      title: 'React 18 并发模式实战',
      summary:
        '了解 React 18 的新特性，如自动批处理、Transitions API 和 Suspense 的改进，提升用户体验。',
      date: '2023-11-02',
      tags: ['React', 'Frontend', 'Performance'],
    },
    {
      id: 3,
      title: 'TypeScript 高级类型体操',
      summary:
        '掌握 TypeScript 的高级类型技巧，包括条件类型、映射类型和模板字面量类型，编写更健壮的代码。',
      date: '2023-11-15',
      tags: ['TypeScript', 'Coding'],
    },
    {
      id: 4,
      title: 'Docker 容器化最佳实践',
      summary:
        '如何为 Node.js 应用构建高效、安全的 Docker 镜像，以及多阶段构建的技巧。',
      date: '2023-11-20',
      tags: ['Docker', 'DevOps'],
    },
    {
      id: 5,
      title: 'Vite vs Webpack：构建工具之争',
      summary:
        '对比新一代构建工具 Vite 和老牌王者 Webpack 的优缺点，选择适合你项目的工具。',
      date: '2023-11-25',
      tags: ['Vite', 'Webpack', 'Tooling'],
    },
    {
      id: 6,
      title: '微服务架构下的数据一致性',
      summary:
        '在分布式系统中如何处理事务？Saga 模式、TCC 模式以及最终一致性的实现策略。',
      date: '2023-12-01',
      tags: ['Microservices', 'Database'],
    },
  ];

  getAll(): BlogPost[] {
    return this.posts;
  }

  getOne(id: number): BlogPost | undefined {
    return this.posts.find((post) => post.id === id);
  }
}

