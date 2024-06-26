//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('JobsAndInternships')
export class JobsAndInternshipsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  title: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  company: string;

  @Column('text', { nullable: true })
  location: string;

  @Column('date', { nullable: true })
  applicationDeadline: Date;

  @Column('text', { nullable: true })
  type: string;
}
