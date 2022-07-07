import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { ConsoleReport } from './ReportTargets/ConsoleReportTarget';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const csvFileReader = new CSVFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
