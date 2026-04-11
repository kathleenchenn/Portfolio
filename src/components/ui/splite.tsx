'use client'

import { Suspense, lazy, Component, type ReactNode } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  transparent?: boolean
}

class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

export function SplineScene({ scene, className, transparent }: SplineSceneProps) {
  return (
    <SplineErrorBoundary
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-[var(--color-text-muted)] text-sm">3D scene requires WebGL</p>
        </div>
      }
    >
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
          onLoad={(splineApp) => {
            if (transparent) {
              const canvas = (splineApp as unknown as { _canvas?: HTMLCanvasElement })._canvas
                ?? document.querySelector<HTMLCanvasElement>(`canvas`)
              if (canvas) {
                canvas.style.background = 'transparent'
              }
            }
          }}
        />
      </Suspense>
    </SplineErrorBoundary>
  )
}
