import { LitElement } from 'lit';
import type { CSSResult, TemplateResult } from 'lit';
import type { AnimationDirection, AnimationItem, AnimationSegment, RendererType } from 'lottie-web';
import { PlayMode, PlayerState } from './types';
import type { Autoplay, Controls, Loop, ObjectFit, PreserveAspectRatio, Subframe } from './types';
export declare class DotLottiePlayer extends LitElement {
    autoplay?: Autoplay;
    background?: string;
    controls?: Controls;
    count?: number;
    currentState?: PlayerState;
    description?: string;
    direction?: AnimationDirection;
    hover?: boolean | undefined;
    intermission?: number | undefined;
    loop?: Loop;
    mode?: PlayMode;
    objectfit?: ObjectFit;
    preserveAspectRatio?: PreserveAspectRatio;
    renderer?: RendererType;
    segment?: AnimationSegment | string;
    seeker?: number;
    speed?: number;
    src: string;
    subframe?: Subframe;
    protected container: HTMLElement;
    private _io?;
    private _lottie;
    private _prevState?;
    private _counter;
    load(src: string | Record<string, number | undefined> | JSON): Promise<void>;
    private _onVisibilityChange;
    private _handleSeekChange;
    private isLottie;
    getLottie(): AnimationItem | null;
    play(): void;
    pause(): void;
    stop(): void;
    destroy(): void;
    seek(value: number | string): void;
    snapshot(download?: boolean): string | void;
    setSubframe(value: boolean): void;
    private freeze;
    reload(): Promise<void>;
    setSpeed(value?: number): void;
    setDirection(value: AnimationDirection): void;
    setLooping(value: boolean): void;
    togglePlay(): void;
    toggleLooping(): void;
    toggleBoomerang(): void;
    static get styles(): CSSResult;
    connectedCallback(): void;
    protected firstUpdated(): Promise<void>;
    disconnectedCallback(): void;
    protected renderControls(): TemplateResult<1>;
    protected render(): TemplateResult | void;
}
//# sourceMappingURL=index.d.ts.map