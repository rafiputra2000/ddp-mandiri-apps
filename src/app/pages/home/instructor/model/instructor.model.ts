export interface Instructor {
  name: string,
  desc: string,
  img: string,
  socialMedia: SocialMedia[]
}

export interface SocialMedia {
  icon: string,
  link: string
}
