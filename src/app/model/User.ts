export class User {
    user_id: string;
    skills: string[];
    interests: string[];
  
    constructor(user_id: string, skills: string[], interests: string[]) {
      this.user_id = user_id;
      this.skills = skills;
      this.interests = interests;
    }
  }
  