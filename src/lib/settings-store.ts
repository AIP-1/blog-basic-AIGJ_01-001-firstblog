// 마이페이지 설정 저장소 (브라우저에서 실행)
// 지금은 이 브라우저의 localStorage에만 저장합니다.
// 나중에 로그인(예: Firebase)을 붙이면 load/save/reset 세 함수의 안쪽만 바꾸면 됩니다.

export interface Settings {
  profileImage?: string; // public 폴더 기준 경로, 예: '/profiles/2.webp'
  greeting?: string;
  noteLeft?: string;
  noteRight?: string;
}

const KEY = 'blog-settings';

export async function loadSettings(): Promise<Settings> {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}');
  } catch {
    return {};
  }
}

export async function saveSettings(settings: Settings) {
  localStorage.setItem(KEY, JSON.stringify(settings));
}

export async function resetSettings() {
  localStorage.removeItem(KEY);
}

// 화면에서 data-setting 표시가 붙은 곳에 설정값을 채워 넣습니다.
export function applySettings(settings: Settings) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  for (const el of document.querySelectorAll<HTMLElement>('[data-setting]')) {
    const key = el.dataset.setting as keyof Settings;
    const value = settings[key];
    if (!value) continue;
    if (el instanceof HTMLImageElement) el.src = base + value;
    else el.textContent = value;
  }
}
