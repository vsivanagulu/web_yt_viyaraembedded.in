
import React from 'react';
import { Server, Layers, Smartphone, Zap } from 'lucide-react';
import { Service, Product, Blog, Testimonial, Client } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Embedded Linux BSP Porting",
    description: "Complete Board Support Package development and customization for custom hardware, ensuring stability and performance optimization.",
    icon: <Server className="w-8 h-8 text-blue-400" />
  },
  {
    id: 2,
    title: "Yocto Project Development",
    description: "Expertise in creating custom, lightweight, and secure Linux distributions tailored specifically to your embedded device requirements.",
    icon: <Layers className="w-8 h-8 text-blue-400" />
  },
  {
    id: 3,
    title: "Android BSP Porting",
    description: "Seamless porting of Android OS to your custom hardware platforms, including driver development and HAL integration.",
    icon: <Smartphone className="w-8 h-8 text-blue-400" />
  },
  {
    id: 4,
    title: "Zephyr RTOS Development",
    description: "Real-time operating system development for resource-constrained devices, focusing on low power consumption and high reliability.",
    icon: <Zap className="w-8 h-8 text-blue-400" />
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'imx6',
    name: "Viyara i.MX6ULL SBC",
    tagline: "Industrial Grade Efficiency",
    specs: ["ARM Cortex-A7 @ 900MHz", "Low Power Consumption", "Industrial Temp Range", "Connectivity: CAN, UART, Ethernet"],
    image: "https://yoctotutor.com/images/Trainings-siva/viyara-6ull_GREEN.webp",
    badge: "Best Seller"
  },
  {
    id: 'imx8mnano',
    name: "Viyara i.MX8M Nano SBC",
    tagline: "Cost-Effective Audio & Media",
    specs: ["Quad-core ARM Cortex-A53", "Cortex-M7 Real-time Core", "3D/2D GPU Acceleration", "Advanced Audio Interfaces"],
    image: "https://yoctotutor.com/images/viyara-images/ve-imx8mv2.png",
    badge: "Featured"
  },
  {
    id: 'imx9',
    name: "Viyara i.MX9 AI Kit",
    tagline: "Next-Gen Edge Computing",
    specs: ["ARM Cortex-A55 + M33", "Dedicated NPU for ML", "High-Speed Interfaces", "Advanced Security Features"],
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "New Arrival"
  },
  {
    id: 'qcs6490',
    name: "Viyara QCS6490 SBC",
    tagline: "Premium AI & 5G Performance",
    specs: ["Qualcomm® QCS6490 Octa-core", "12 TOPS AI Engine", "5G Sub-6 & Wi-Fi 6E", "Triple ISP for Advanced Imaging", "Enterprise-Grade Lifecycle"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Flagship"
  }
];

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: "Optimizing Boot Time in Yocto",
    date: "Oct 12, 2024",
    excerpt: "Learn the essential techniques to shave seconds off your embedded Linux boot process using systemd analysis.",
    category: "Software"
  },
  {
    id: 2,
    title: "Why i.MX9 is the Future of Edge AI",
    date: "Nov 05, 2024",
    excerpt: "Exploring the neural processing capabilities of the new i.MX9 architecture and its applications in industrial automation.",
    category: "Hardware"
  },
  {
    id: 3,
    title: "Zephyr vs. FreeRTOS: A Comparison",
    date: "Nov 28, 2024",
    excerpt: "A deep dive into the pros and cons of the two most popular RTOS choices for modern IoT devices.",
    category: "Development"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Lead Hardware Engineer",
    company: "MedTech Innovations",
    content: "The custom Android BSP Viyara developed for our medical tablet was flawless. Their understanding of regulatory requirements and HAL integration saved us months of development time.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "CTO",
    company: "Industrial IoT Solutions",
    content: "We switched to Viyara's i.MX6ULL SBC for our gateway products. The thermal performance and long-term support commitment were exactly what we needed for our industrial clients.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    id: 3,
    name: "David Kumar",
    role: "Product Manager",
    company: "AgriSense",
    content: "Porting our legacy code to Zephyr RTOS seemed impossible until we brought Viyara on board. Their expertise in low-power optimization has significantly extended our device battery life.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  }
];

export const CLIENTS: Client[] = [
  { id: 1, name: "TechVision Systems", logo: "https://placehold.co/180x60/0f172a/64748b?text=TechVision" },
  { id: 2, name: "Nexus Robotics", logo: "https://placehold.co/180x60/0f172a/64748b?text=Nexus+Robotics" },
  { id: 3, name: "PureWave Audio", logo: "https://placehold.co/180x60/0f172a/64748b?text=PureWave" },
  { id: 4, name: "AeroDynamics", logo: "https://placehold.co/180x60/0f172a/64748b?text=AeroDynamics" },
  { id: 5, name: "Smart Grid Corp", logo: "https://placehold.co/180x60/0f172a/64748b?text=Smart+Grid" },
  { id: 6, name: "MediTech Labs", logo: "https://placehold.co/180x60/0f172a/64748b?text=MediTech" },
];
