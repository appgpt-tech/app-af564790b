//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { JobsAndInternshipsEntity } from './db/JobsAndInternships.entity';
import { gradesEntity } from './db/grades.entity';
import { subjectsEntity } from './db/subjects.entity';
import { notesEntity } from './db/notes.entity';
import { HealthAndMentalCareEntity } from './db/HealthAndMentalCare.entity';
import { newsEntity } from './db/news.entity';
import { LoanCalculatorEntity } from './db/LoanCalculator.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      JobsAndInternshipsEntity,
      gradesEntity,
      subjectsEntity,
      notesEntity,
      HealthAndMentalCareEntity,
      newsEntity,
      LoanCalculatorEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      JobsAndInternships: [
        {
          title: 'title 1',
          description: 'description 1',
          company: 'company 1',
          location: 'location 1',
          applicationDeadline: '2025-02-11T12:23:59.436Z',
          type: 'type 1',
          id: 98,
        },
        {
          title: 'title 2',
          description: 'description 2',
          company: 'company 2',
          location: 'location 2',
          applicationDeadline: '2023-10-15T20:55:55.605Z',
          type: 'type 2',
          id: 23,
        },
        {
          title: 'title 3',
          description: 'description 3',
          company: 'company 3',
          location: 'location 3',
          applicationDeadline: '2023-11-25T04:43:11.054Z',
          type: 'type 3',
          id: 25,
        },
        {
          title: 'title 4',
          description: 'description 4',
          company: 'company 4',
          location: 'location 4',
          applicationDeadline: '2024-06-01T08:48:46.717Z',
          type: 'type 4',
          id: 97,
        },
        {
          title: 'title 5',
          description: 'description 5',
          company: 'company 5',
          location: 'location 5',
          applicationDeadline: '2023-10-04T01:03:23.471Z',
          type: 'type 5',
          id: 53,
        },
      ],
      grades: [
        { cgpa: 0.49, gradeCalculator: 'gradeCalculator 1', id: 92 },
        { cgpa: 0.21, gradeCalculator: 'gradeCalculator 2', id: 76 },
        { cgpa: 0.41, gradeCalculator: 'gradeCalculator 3', id: 29 },
        { cgpa: 0.28, gradeCalculator: 'gradeCalculator 4', id: 36 },
        { cgpa: 0.07, gradeCalculator: 'gradeCalculator 5', id: 91 },
      ],
      subjects: [
        { subjectName: 'subjectName 1', id: 75 },
        { subjectName: 'subjectName 2', id: 49 },
        { subjectName: 'subjectName 3', id: 90 },
        { subjectName: 'subjectName 4', id: 12 },
        { subjectName: 'subjectName 5', id: 58 },
      ],
      notes: [
        {
          title: 'title 1',
          content: 'content 1',
          subject: 1,
          dateCreated: '2024-04-05T02:34:45.266Z',
          id: 1,
        },
        {
          title: 'title 2',
          content: 'content 2',
          subject: 2,
          dateCreated: '2025-02-10T20:39:02.019Z',
          id: 20,
        },
        {
          title: 'title 3',
          content: 'content 3',
          subject: 3,
          dateCreated: '2024-11-24T20:26:55.002Z',
          id: 68,
        },
        {
          title: 'title 4',
          content: 'content 4',
          subject: 4,
          dateCreated: '2024-09-07T09:23:13.898Z',
          id: 77,
        },
        {
          title: 'title 5',
          content: 'content 5',
          subject: 5,
          dateCreated: '2024-03-23T01:28:57.251Z',
          id: 29,
        },
      ],
      HealthAndMentalCare: [
        {
          serviceName: 'serviceName 1',
          description: 'description 1',
          contactInformation: 'contactInformation 1',
          availability: 'availability 1',
          id: 96,
        },
        {
          serviceName: 'serviceName 2',
          description: 'description 2',
          contactInformation: 'contactInformation 2',
          availability: 'availability 2',
          id: 59,
        },
        {
          serviceName: 'serviceName 3',
          description: 'description 3',
          contactInformation: 'contactInformation 3',
          availability: 'availability 3',
          id: 7,
        },
        {
          serviceName: 'serviceName 4',
          description: 'description 4',
          contactInformation: 'contactInformation 4',
          availability: 'availability 4',
          id: 55,
        },
        {
          serviceName: 'serviceName 5',
          description: 'description 5',
          contactInformation: 'contactInformation 5',
          availability: 'availability 5',
          id: 57,
        },
      ],
      news: [
        {
          title: 'title 1',
          content: 'content 1',
          datePublished: '2024-03-16T09:53:08.118Z',
          category: 'category 1',
          id: 96,
        },
        {
          title: 'title 2',
          content: 'content 2',
          datePublished: '2024-06-12T03:49:32.673Z',
          category: 'category 2',
          id: 78,
        },
        {
          title: 'title 3',
          content: 'content 3',
          datePublished: '2024-09-12T04:38:34.661Z',
          category: 'category 3',
          id: 36,
        },
        {
          title: 'title 4',
          content: 'content 4',
          datePublished: '2023-05-29T08:13:40.336Z',
          category: 'category 4',
          id: 28,
        },
        {
          title: 'title 5',
          content: 'content 5',
          datePublished: '2024-07-09T12:27:50.639Z',
          category: 'category 5',
          id: 14,
        },
      ],
      LoanCalculator: [
        { loanAmount: 0.34, interestRate: 0.06, loanTerm: 1, id: 25 },
        { loanAmount: 0.05, interestRate: 0.11, loanTerm: 2, id: 60 },
        { loanAmount: 0.1, interestRate: 0.59, loanTerm: 3, id: 86 },
        { loanAmount: 0.11, interestRate: 0.03, loanTerm: 4, id: 65 },
        { loanAmount: 0.03, interestRate: 0.7, loanTerm: 5, id: 73 },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource(
        'JobsAndInternshipsEntity',
        data.JobsAndInternships,
      );
      await this.SeedResource('gradesEntity', data.grades);
      await this.SeedResource('subjectsEntity', data.subjects);
      await this.SeedResource('notesEntity', data.notes);
      await this.SeedResource(
        'HealthAndMentalCareEntity',
        data.HealthAndMentalCare,
      );
      await this.SeedResource('newsEntity', data.news);
      await this.SeedResource('LoanCalculatorEntity', data.LoanCalculator);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}
