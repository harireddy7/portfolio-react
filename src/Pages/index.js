import { lazy } from 'react';

export const AboutLazy = lazy(() => import('./About'));
export const SkillsLazy = lazy(() => import('./Skills'));
export const ProjectsLazy = lazy(() => import('./Projects'));
export const ContactLazy = lazy(() => import('./Contact'));
export const FooterLazy = lazy(() => import('../Components/Footer'));
