import { EntityRepository, Repository } from "typeorm";
import Participant, { ParticipantRole } from "../model/Participant";

@EntityRepository(Participant)
export default class ParticipantRepo extends Repository<Participant> {
    getInterviwers(getInterviews: boolean = false): Promise<Participant[]> {
        if(getInterviews)
            return this.find({where: {role: ParticipantRole.INTERVIEWER}, relations: ["interviews"]});
        return this.find({where: {role: ParticipantRole.INTERVIEWER}});   
    }

    getCandidates(getInterviews: boolean = false): Promise<Participant[]> {        
        if(getInterviews)
            return this.find({where: {role: ParticipantRole.CANDIDATE}, relations: ["interviews"]});
        return this.find({where: {role: ParticipantRole.CANDIDATE}});
    }
}
